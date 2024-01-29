import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {

    const {id} = params;

    await sql`
     update users set cluster_id=NULL where user_id=${id}
    `

    return NextResponse.json({status: 'successfully removed cluster from user table'})
}
