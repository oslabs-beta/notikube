import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';

type Incident = {
  incident_id: string,
  incident_date: Date,
  incident_type: string,
  description: string,
  priority_level: string,
  incident_title: string,
  incident_status: string, 
  comment: string,
  incident_assigned_to: string,
  metric_data_id: string,
}

type ClusterRes = {
  cluster_id: string,
}


export async function GET(request: NextRequest, {params}: {params: {user_id: string}}) {

    const { user_id } = params; 

    const cluster_id: ClusterRes[] = await sql`
      select cluster_id from users where user_id=${user_id}
    `
    const incidents: Incident[] = await sql`
    select * from incidents where cluster_id=${cluster_id[0].cluster_id}
  `
    const members: Array<object> = await sql`
    select name, email from users where cluster_id=${cluster_id[0].cluster_id}
    `

  return NextResponse.json([incidents, members]);
  
}
