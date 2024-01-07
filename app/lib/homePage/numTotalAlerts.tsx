import sql from "../../utils/db";

//return total number of alerts
export default async function numTotalAlerts() {
  try{
    //NEED TO SWITCH THIS TO ACTUAL TABLE
    const result = await sql`SELECT COUNT(*) FROM users`;
    return result[0].count
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of alerts.');
  }
}