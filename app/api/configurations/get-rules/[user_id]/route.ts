import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../../utils/db"

//Return all rules for a cluster associated with the passed in userid.
export async function GET(request: NextRequest, {params}: {params: {user_id: string}}) {
    const { user_id } = params; 
  try {
    const clusterID = await sql`SELECT clusters.cluster_id FROM clusters JOIN users ON clusters.cluster_id=users.cluster_id WHERE user_id=${user_id}`
    const clusterIDResult = clusterID[0].cluster_id
    const rules = await sql`SELECT * FROM rules WHERE cluster_id=${clusterIDResult}`
    return NextResponse.json(rules)
  } catch (err) {
    console.error('Error. Not able to get user\'s cluster\'s rules:', err)
  }
}