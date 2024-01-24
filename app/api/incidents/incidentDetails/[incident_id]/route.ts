import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';
import { Incident } from '../../../../../types/definitions';


export async function GET(request: NextRequest, {params}: {params: {incident_id: string}}) {

    const { incident_id } = params;
    console.log('incident_id', incident_id)

    const incidentDetails: Incident[] = await sql`
      select * from incidents where incident_id=${incident_id}
    `
    console.log(incidentDetails[0])

  return NextResponse.json(incidentDetails);
  
}
