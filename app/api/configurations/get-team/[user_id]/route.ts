import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../../utils/db"

//Return all user names and emails that are assocaited with the logged in user's cluster.
export async function GET(request: NextRequest, {params}: {params: {user_id: string}}) {
    const { user_id } = params; 
  try {
    const clusterIP = await sql`SELECT clusters.cluster_id FROM clusters JOIN users ON clusters.cluster_id=users.cluster_id WHERE user_id=${user_id}`
    const clusterIPResult = clusterIP[0].cluster_id
    const team = await sql`SELECT name, email FROM users WHERE cluster_id=${clusterIPResult}`
    return NextResponse.json(team)
  } catch (err) {
    console.error('Error. Not able to get user\'s cluster team:', err)
  }
}