import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';


type User = {
    userid: number,
    name: string,
    email: string,
    phone: number,
    slack: string,
}

export async function GET(request: NextRequest) {

    const users: User[] = await sql`
    select * from users
  `

  for (let key in users) {
    if (users[key].phone) {
      console.log('phone', users[key].phone)
    }
  }

  return NextResponse.json(users);
}
