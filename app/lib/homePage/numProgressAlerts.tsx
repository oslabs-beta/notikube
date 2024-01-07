import sql from "../../utils/db";

//return total number of in progress alerts
export default async function numProgressAlerts() {
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