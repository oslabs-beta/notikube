import { NextResponse } from "next/server";
import sql from "../../utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export async function GET(req: any) {
  // This grabs the user id from the current logged in user
  const session = await getServerSession(authOptions);
  const user_id = session?.user.userid;

  try {
    // Select cluster_name and cluster_up based on the users_id
    let clusterData = await sql`SELECT cluster_name, cluster_ip
    FROM clusters
    JOIN users ON users.cluster_id = clusters.cluster_id
    WHERE users.user_id = ${user_id};`
    if (clusterData.length === 0) {
      return NextResponse.json({error: 'User Data Not Found'}, {status: 400})
    }
    const { cluster_ip, cluster_name }= clusterData[0]
    // console.log(cluster_ip, cluster_name)
    return NextResponse.json({cluster_ip, cluster_name})
  } catch (err) {
    console.error("Error. Not able to get user's clusters", err);
  }
}
