import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';

type User = {
    userid: number,
    name: string,
    email: string,
    phone: number,
    slack: string,
    notes?: string,
}

export async function POST(req: NextRequest) {

    const user: User = await req.json();

    async function updateUser(user: User) {
        await sql`
    update users SET name=${user.name}, email=${user.email}, slack=${user.slack}, phone=${user.phone}, notes=${user.notes} where userid=${user.userid}
    `
    }

    updateUser(user)

  return NextResponse.json(user);
}