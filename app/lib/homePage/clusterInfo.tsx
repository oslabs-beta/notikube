import sql from "../../utils/db";

//return cluster info
export async function clusterInfo() {
  try{
    //NEED TO EDIT THIS QUERY AFTER DB UPDATE
    const result = await sql`SELECT clustername, clusterip FROM clusters WHERE clusterip=12345;`;
    return result[0]
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch clusterInfo.');
  }
}
