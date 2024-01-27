import { NextRequest, NextResponse} from 'next/server';
import type {NextApiRequest, NextApiResponse} from 'next';
import sql from '../../../utils/db';
import {sendMail} from '../../../../service/mailService'
import { Incident, Email } from '../../../../types/definitions'

export async function POST(req: NextRequest, res: NextResponse) {

    const data = await req.json();

    const assignedTo: Incident[] = await sql`
    select incident_assigned_to from incidents where incident_id=${data.incident_id}
    `
    const email: Email[] = await sql`
    select email from users where name=${data.assigned_to} AND cluster_id=${data.cluster_id}
    `

    if (assignedTo[0].incident_assigned_to !== data.assigned_to) {
        if (data.incident_title === undefined) data.incident_title = 'Unnamed Cluster';

        console.log('sending mail to:', email[0].email)

        sendMail(
            email[0].email,
            'NotiKube: You have been assigned a new incident',
            `You have been assigned a new NotiKube incident: <b>${data.incident_title}</b>.
            <br><br> 
            Please <a href="http://localhost:3000/auth/login">log in</a> to your NotiKube account and navigate to the Incidents page for more details.`
        )
    }

    await sql`
    update incidents SET incident_type=${data.type}, description=${data.description}, priority_level=${data.priority}, incident_title=${data.title}, incident_status=${data.status}, comment=${data.notes}, incident_assigned_to=${data.assigned_to}, incident_assigned_by=${data.assigned_by}, incident_due_date=${data.due_date}, incident_assigned_date=${data.assigned_date} where incident_id=${data.incident_id}
    `

    return NextResponse.json({response: 'successfully updated incident'})
}