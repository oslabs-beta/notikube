import { NextRequest, NextResponse} from 'next/server';
import sql from "../../utils/db"

//Return all user names and emails that are assocaited with the logged in user's cluster.
export default async function GET(request: NextRequest, {params}: {params: {user_id: string}}) {
  const { user_id } = params; 
  try {
    const clusterIP = await sql`SELECT cluster_id FROM clusters WHERE user_id=${user_id}`
    console.log('return clusterip test:', clusterIP);
    //const clusterIPResult = clusterIP[0]
    //const team = await sql`SELECT name, email FROM users WHERE cluster_id=${clusterIPResult}`
    //const teamResult = team[0] 
    //return NextResponse.json({teamResult})
  } catch (err) {
    console.error('Error. Not able to get user\'s cluster team:', err)
  }
}