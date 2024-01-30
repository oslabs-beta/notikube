import { NextRequest, NextResponse } from 'next/server';
import sql from '../../../utils/db';


export async function POST(req: NextRequest, res: NextResponse) {

    const data = await req.json();

    const user = await sql`
      delete from users where user_id=${data.user_id} returning users.name
    `
    console.log('user.name', user[0].name)

    await sql`
      update incidents set incident_assigned_to='' where incident_assigned_to=${user[0].name} 
    `
    await sql`
      update incidents set incident_assigned_by='' where incident_assigned_by=${user[0].name} 
    `

    return NextResponse.json({message: 'success'})

}