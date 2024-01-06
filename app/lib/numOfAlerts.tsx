import sql from '../utils/db'

export default async function numOfAlerts() {
  try{
    //NEED TO SWITCH THIS TO ACTUAL TABLE
    const result = await sql`SELECT COUNT(*) FROM users`;
    return result;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch number of alerts.');
  }
  
}
