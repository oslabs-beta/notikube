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
    cluster_id: string,
  }


export async function GET(request: NextRequest, {params}: {params: {incident_id: string}}) {

    const { incident_id } = params;
    console.log('incident_id', incident_id)

    const incidentDetails: Incident[] = await sql`
      select * from incidents where incident_id=${incident_id}
    `
    console.log(incidentDetails[0])

  return NextResponse.json(incidentDetails);
  
}
