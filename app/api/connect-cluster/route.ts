import { NextResponse} from 'next/server';
import sql from '../../utils/db';

export async function POST(req: any) {  
  try {
    const { clusterName, clusterIp } = await req.json()
    await sql`INSERT INTO clusters (cluster_name, cluster_ip) VALUES (${clusterName}, ${clusterIp})`
    return NextResponse.json({newCluster: true});
  } catch (err) {
    console.error(`Error inserting data:`, err)
    return NextResponse.json({newCluster: false})
  }
}