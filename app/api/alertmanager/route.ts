import { NextRequest, NextResponse } from "next/server";
import sql from "../../utils/db";
import { Incident } from "../../../types/definitions";
import { numOfReadyNodes, numOfUnhealthyNodes, numOfReadyPods, numOfUnhealthyPods, clusterMemoryUsage, clusterCpuUsage10mAvg } from "../../lib/queries";

export async function POST(req: NextRequest) {
    try {

        // Retrieving email from webhook URL query
        const searchParams = req.nextUrl.searchParams
        const email = searchParams.get("email")
        console.log("email: ", email)
        const alertObject = await req.json()
        console.log(alertObject)

        // Search and grab clusterID from the db based on the user email
        const clusterIdQueryResult = await sql`SELECT cluster_id FROM users WHERE email=${email};`
        const clusterId = clusterIdQueryResult[0]['cluster_id']
        console.log(clusterId)

        // Retrieving relevant incident details
        const incident_title = alertObject['commonLabels']['alertname']
        const priority_level = alertObject['commonLabels']['severity']
        const incident_type = alertObject['commonAnnotations']['summary']
        const incident_description = alertObject['commonAnnotations']['description']
        const incident_status = 'Open'

        // Insert new incident into the db
        const newIncident = await sql`INSERT INTO incidents (cluster_id, incident_type, description, priority_level, incident_title, incident_status) VALUES (${clusterId}, ${incident_type}, ${incident_description}, ${priority_level}, ${incident_title}, ${incident_status}) RETURNING *;`
        console.log('newIncident:', newIncident)
        const newIncidentId = newIncident[0]['incident_id']

        // Retrieving IP Address from db for PromQL queries for the metric snapshot 
        const clusterInformation = await sql`SELECT * FROM clusters WHERE cluster_id=${clusterId}`
        const ipAddress = clusterInformation[0]['cluster_ip']

        // Grabbing metrics snapshots with PromQL queries
        const numOfReadyNodesResult = await numOfReadyNodes(ipAddress)
        const numOfUnhealthyNodesResult = await numOfUnhealthyNodes(ipAddress)
        const numOfReadyPodsResult = await numOfReadyPods(ipAddress)
        const numOfUnhealthyPodsResult = await numOfUnhealthyPods(ipAddress)
        const clusterMemoryUsageResult = await clusterMemoryUsage(ipAddress)
        const clusterCpuUsage10mAvgResult = await clusterCpuUsage10mAvg(ipAddress)

        //Adding the metrics to the db
        await sql`INSERT INTO metric_data (incident_id, ready_nodes, unhealthy_nodes, ready_pods, unhealthy_pods, cluster_memory_usage, cluster_cpu_usage) VALUES (${newIncidentId}, ${numOfReadyNodesResult}, ${numOfUnhealthyNodesResult}, ${numOfReadyPodsResult}, ${numOfUnhealthyPodsResult}, ${clusterMemoryUsageResult}, ${clusterCpuUsage10mAvgResult})`

        return NextResponse.json({status: 200})

    }

    catch(e) {
        return NextResponse.json({message: 'Error occured while storing alert in db: ', e}, {status: 500})
    }

}