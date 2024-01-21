import sql from "../../utils/db";
//Opting out of static rending for dynamic (no caching) @https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
import { unstable_noStore as noStore } from 'next/cache';
import { Cluster } from '../definitions'

//return cluster info
//PASSING IN WRONG DATA - NEED TO UPDATE AFTER CLUSTER TABLE IS FIXED
export async function clusterInfo(userid: string) {
  noStore();
  try{
    //NEED TO EDIT THIS QUERY AFTER DB UPDATE
    const result = await sql<Cluster[]>`SELECT clusters.cluster_name, clusters.cluster_ip FROM clusters JOIN users ON clusters.cluster_id=users.cluster_id WHERE users.user_id=${userid};`;
    //console.log('cluster result: ', result[0])
    return result[0]
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch clusterInfo.');
  }
}
