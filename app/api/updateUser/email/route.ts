import { NextRequest, NextResponse } from 'next/server';
import sql from '../../../utils/db';


export async function POST(req: NextRequest, res: NextResponse) {
  console.log('email route')

  let data = await req.json();

  let emailStatus: (string | undefined) = undefined;

  console.log('data.status', data.status)

  if (data.status === true) {
    data.status = false;
  } else if (data.status === false) {
    data.status = true;
  }

  console.log('email status', data.status)
  console.log('user_id', data.user_id)

    await sql`
      update users set email_status=${data.status} where user_id=${data.user_id}
    `


    return NextResponse.json({message: 'success'})

}