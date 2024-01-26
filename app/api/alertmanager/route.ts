import { NextRequest, NextResponse } from "next/server";
import sql from "../../utils/db";
import { Incident } from "../../../types/definitions";

export async function POST(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const email = searchParams.get("email")
    console.log("email: ", email)
    const alertObject = await req.json()
    console.log(alertObject)

    const clusterIdQueryResult = await sql`SELECT cluster_id FROM users WHERE email=${email};`
    const clusterId = clusterIdQueryResult[0]['cluster_id']
    console.log(clusterId)

    try {
        const incident_title = alertObject['commonLabels']['alertname']
        const priority_level = alertObject['commonLabels']['severity']
        const incident_type = alertObject['commonAnnotations']['summary']
        const incident_description = alertObject['commonAnnotations']['description']
        const incident_status = 'Open'


        const newIncident = await sql`INSERT INTO incidents (cluster_id, incident_type, description, priority_level, incident_title, incident_status) VALUES (${clusterId}, ${incident_type}, ${incident_description}, ${priority_level}, ${incident_title}, ${incident_status}) RETURNING *;`

        console.log('newIncident:', newIncident)

    }

    catch(e) {
        return NextResponse.json({message: 'Error occured while storing alert in db: ', e}, {status: 500})
    }

    return NextResponse.json(alertObject)
}