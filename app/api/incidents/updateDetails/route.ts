import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';
import {sendMail} from '../../../../service/mailService';
import { Incident, Email } from '../../../../types/definitions';

export async function POST(req: NextRequest, res: NextResponse) {

  const data = await req.json();

  // look up who the incident was previously assigned to
  const assignedTo: Incident[] = await sql`
  select incident_assigned_to from incidents where incident_id=${data.incident_id}
  `
  // check to see if incident has been reassigned
  if (assignedTo[0].incident_assigned_to !== data.incident_assigned_to) {

    const email: Email[] = await sql`
      select email from users where name=${data.incident_assigned_to} AND cluster_id=${data.cluster_id}
    `
    if (data.incident_title === undefined) data.incident_title = 'Unnamed Cluster';

    if (email[0].email) {

      console.log('sending mail to:', email[0].email)

      sendMail(
        email[0].email,
        'NotiKube: You have been assigned a new incident',
        `You have been assigned a new NotiKube incident: <b>${data.incident_title}</b>.
        <br><br> 
        Please <a href="http://localhost:3000/auth/login">log in</a> to your NotiKube account and navigate to the Incidents page for more details.`
      )
    }
  }

  // update incident row in database
  await sql`
    update incidents SET incident_type=${data.incident_type}, description=${data.description}, priority_level=${data.priority_level}, incident_title=${data.incident_title}, incident_status=${data.incident_status}, comment=${data.comment}, incident_assigned_to=${data.incident_assigned_to}, incident_assigned_by=${data.incident_assigned_by}, incident_due_date=${data.incident_due_date}, incident_assigned_date=${data.incident_assigned_date} where incident_id=${data.incident_id}
  `

  return NextResponse.json({response: 'successfully updated incident'});

};