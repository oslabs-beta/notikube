import { NextRequest, NextResponse } from 'next/server';
import sql from '../../../utils/db';


export async function POST(req: NextRequest, res: NextResponse) {

  let data = await req.json();

  let emailStatus: (string | undefined) = undefined;

  if (data.status === true) {
    data.status = false;
  } else if (data.status === false) {
    data.status = true;
  }

  try {

    await sql`
      update users set email_status=${data.status} where user_id=${data.user_id}
    `

    return NextResponse.json({message: 'successfully updated email preferences'})

    } catch(err) {
      console.log('error', err)
      return NextResponse.json({
          message: `Error updating email preferences.`
      });
}

};