import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';
import { User } from '../../../../types/definitions';

export async function GET(request: NextRequest, {params}: {params: {userID: string}}) {

    const { userID } = params;

    try {

    const userData: User[] = await sql`
        select * from users where user_id=${userID}
    `

    return NextResponse.json(userData[0]);

    } catch(err) {
        console.log('error', err)
        return NextResponse.json({
            message: `Error getting user data.`
        });
    }
};