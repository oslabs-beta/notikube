import { NextResponse} from 'next/server';
import sql from '../../utils/db';


type User = {
    userid: number,
    name: string,
    email: string,
    phone: number,
    slack: string,
}

export async function GET() {

    const users: User[] = await sql`
    select * from users
  `
    await console.log('users', users[0])

  return NextResponse.json(users);
}
