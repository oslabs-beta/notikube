import { NextResponse} from 'next/server';
import sql from '../../utils/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route'
import { activeCluster } from '../../lib/queries';

export async function POST(req: any) {  

  // This grabs the user id from the current logged in user
  const session = await getServerSession(authOptions);
  const user_id = session?.user.userid

  // This is the cluster name and cluster ip that is sent from the request modal
  const { clusterName, clusterIp } = await req.json()

  try {
    // This checks whether the logged in user has an associated cluster_id
    if (user_id !== undefined) {
      const verifyUserCluster = await sql`SELECT cluster_id FROM users WHERE user_id = ${user_id}`
      if (verifyUserCluster[0].cluster_id !== null) {
        return NextResponse.json({ error: 'Error: You already have a cluster associated with your account!' }, { status: 400 })
      }
    }

    // This checks whether the submitted cluster_ip from the popup modal already exists
    const verifyClusterIp = await sql`SELECT cluster_ip from clusters WHERE cluster_ip = ${clusterIp}`
    console.log(verifyClusterIp)
    if (verifyClusterIp.length !== 0) {
      console.log('clusterip already exists!')
      return NextResponse.json({ error: 'Error: This clusterIp already exists!' }, { status: 400 })
    }

    // This checks whether the provided clusterip points to an active cluster
    const activeClusterResults = await activeCluster(clusterIp)
    if (!activeClusterResults) {
      return NextResponse.json({ error: 'Error: This cluster is not active!' }, { status: 400 })
    }

    // This grabs the cluster_id and sends it back to the user so that cluster_id is associated with the user
    const grabClusterId = await sql`INSERT INTO clusters (cluster_name, cluster_ip) VALUES (${clusterName}, ${clusterIp}) RETURNING cluster_id`
    const clusterId = grabClusterId[0].cluster_id

    // This inserts into users cluster_ip
    if (user_id !== undefined) {
      const addClusterToUser = await sql`UPDATE users SET cluster_id=${clusterId} WHERE user_id=${user_id}`
    }

    // If all the checks have passed, return true boolean
    return NextResponse.json({newCluster: true});
  } catch (err) {
    console.error(`Error inserting data:`, err)
    return NextResponse.json({newCluster: false})
  }
}