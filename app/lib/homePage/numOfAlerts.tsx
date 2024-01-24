import sql from "../../utils/db";
//Opting out of static rending for dynamic (no caching) @https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
import { unstable_noStore as noStore } from 'next/cache';
import { Count } from "../../../types/definitions";

//returns total number of alerts
export async function numTotalAlerts(clusterip: string) {
  noStore();
  try {
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents JOIN clusters ON clusters.cluster_id=incidents.cluster_id WHERE clusters.cluster_ip=${clusterip}`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of alerts.');
  }
}

//return number of Open status alerts
export async function numOpenAlerts(clusterip: string) {
  noStore();
  try {
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents JOIN clusters ON clusters.cluster_id=incidents.cluster_id WHERE incidents.incident_status='Open' AND clusters.cluster_ip=${clusterip}`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of Open alerts.');
  }
}

//return number of In Progress status alerts
export async function numProgressAlerts(clusterip: string) {
  noStore();
  try {
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents JOIN clusters ON clusters.cluster_id=incidents.cluster_id WHERE incidents.incident_status='In Progress' AND clusters.cluster_ip=${clusterip}`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of In Progress alerts.');
  }
}

//return number of In Progress status alerts
export async function numCriticalAlerts(cluster_ip: string) {
  noStore();
  try {
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents JOIN clusters ON clusters.cluster_id=incidents.cluster_id WHERE incidents.priority_level='Critical' AND clusters.cluster_ip=${cluster_ip}`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of Critical alerts.');
  }
}