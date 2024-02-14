import { NextRequest, NextResponse } from 'next/server';
import sql from '../../../utils/db';


export async function POST(req: NextRequest, res: NextResponse) {

    const data = await req.json();

    try {

    const user = await sql`
      delete from users where user_id=${data.user_id} returning users.name
    `
    await sql`
      update incidents set incident_assigned_to='' where incident_assigned_to=${user[0].name} 
    `
    await sql`
      update incidents set incident_assigned_by='' where incident_assigned_by=${user[0].name} 
    `

    return NextResponse.json({message: 'success'})

    } catch(err) {
      console.log('error', err)
      return NextResponse.json({
          message: `Error removing user account.`
      });
}

};