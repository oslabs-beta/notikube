import sql from "../../utils/db";
//Opting out of static rending for dynamic (no caching) @https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
import { unstable_noStore as noStore } from 'next/cache';
import { Count } from "../definitions";

//return total number of alerts
export async function numTotalAlerts() {
  noStore();
  try{
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of alerts.');
  }
}

//return number of Open status alerts
export async function numOpenAlerts(){
  noStore();
  try{
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents WHERE incident_status='Open'`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of Open alerts.');
  }
}

//return number of In Progress status alerts
export async function numProgressAlerts(){
  noStore();
  try{
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents WHERE incident_status='In Progress'`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of In Progress alerts.');
  }
}

//return number of In Progress status alerts
export async function numCriticalAlerts(){
  noStore();
  try{
    const result = await sql<Count[]>`SELECT COUNT(*) FROM incidents WHERE priority_level='Critical'`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of In Progress alerts.');
  }
}