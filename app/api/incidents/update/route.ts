import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';
import {sendMail} from '../../../../service/mailService'

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

  type Email = {
    email: string,
  }

export async function POST(req: NextRequest) {

    const incident: Incident = await req.json();

    const assignedTo: Incident[] = await sql`
    select incident_assigned_to from incidents where incident_id=${incident.incident_id}
    `
    const email: Email[] = await sql`
    select email from users where name=${incident.incident_assigned_to} AND cluster_id=${incident.cluster_id}
    `

    if (assignedTo[0].incident_assigned_to !== incident.incident_assigned_to) {

        console.log('sending mail to:', email[0].email)

        sendMail(
            email[0].email,
            'NotiKube: You have been assigned a new incident',
            `You have been assigned a new NotiKube incident: <b>${incident.incident_title}</b>.
            <br><br> 
            Please <a href="http://localhost:3000/auth/login">log in</a> to your NotiKube account and navigate to the Incidents page for more details.`
        )
    }

    async function updateUser(incident: Incident) {
        await sql`
            update incidents SET incident_type=${incident.incident_type}, description=${incident.description}, priority_level=${incident.priority_level}, incident_title=${incident.incident_title}, incident_status=${incident.incident_status}, comment=${incident.comment}, incident_assigned_to=${incident.incident_assigned_to} where incident_id=${incident.incident_id}
        `
    }

    updateUser(incident)

  return NextResponse.json(incident);
}