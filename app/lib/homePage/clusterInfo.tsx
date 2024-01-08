import sql from "../../utils/db";
//Opting out of static rending for dynamic (no caching) @https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
import { unstable_noStore as noStore } from 'next/cache';
import { Cluster } from '../definitions'

//return cluster info
export async function clusterInfo() {
  noStore();
  try{
    //NEED TO EDIT THIS QUERY AFTER DB UPDATE
    const result = await sql<Cluster[]>`SELECT clustername, clusterip FROM clusters WHERE clusterip=12345;`;
    //console.log('cluster result: ', result)
    return result[0]
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch clusterInfo.');
  }
}
