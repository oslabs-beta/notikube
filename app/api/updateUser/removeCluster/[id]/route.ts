import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {

    const {id} = params;

    try {

    const user = await sql`
      update users set cluster_id=NULL where user_id=${id} returning users.name
    `
    await sql`
      update incidents set incident_assigned_to='' where incident_assigned_to=${user[0].name}
    `

    return NextResponse.json({status: 'successfully removed cluster from user table'})

    } catch(err) {
      console.log('error', err)
      return NextResponse.json({
          message: `Error deleting cluster.`
      });
}

};
