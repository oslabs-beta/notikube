import sql from "../../utils/db";
//Opting out of static rending for dynamic (no caching) @https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
import { unstable_noStore as noStore } from 'next/cache';
import { Count } from "../definitions";

//return total number of in progress alerts
export async function numProgressAlerts() {
  noStore();
  try{
    //NEED TO SWITCH THIS TO ACTUAL TABLE
    const result = await sql<Count[]>`SELECT COUNT(*) FROM users`;
    //console.log(result)
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of alerts.');
  }
}

//return total number of alerts
export async function numTotalAlerts() {
  noStore();
  try{
    //NEED TO SWITCH THIS TO ACTUAL TABLE
    const result = await sql<Count[]>`SELECT COUNT(*) FROM users`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of alerts.');
  }
}