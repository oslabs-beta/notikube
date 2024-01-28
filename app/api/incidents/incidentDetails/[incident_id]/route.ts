import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';
import { Incident } from '../../../../../types/definitions';


export async function GET(request: NextRequest, {params}: {params: {incident_id: string}}) {

  const { incident_id } = params;

  const incidentDetails: Incident[] = await sql`
    select * from incidents where incident_id=${incident_id}
  `
  const clusterName: Incident[] = await sql`
    select cluster_name, cluster_ip from clusters where cluster_id=${incidentDetails[0].cluster_id}
  `
  const members: [{name:string, email:string}] = await sql`
    select name, email from users where cluster_id=${incidentDetails[0].cluster_id}
  `
  incidentDetails[0].cluster_name = clusterName[0].cluster_name;
  incidentDetails[0].cluster_ip = clusterName[0].cluster_ip;
  incidentDetails[0].members = members;

  return NextResponse.json(incidentDetails);
  
}
