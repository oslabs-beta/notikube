import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';
import { TableData, ClusterRes } from '../../../../../types/definitions';



export async function GET(request: NextRequest, {params}: {params: {user_id: string}}) {

  console.log('envorionment', process.env.NODE_ENV)

  const { user_id } = params; 

  try {

  const cluster_id: ClusterRes[] = await sql`
    select cluster_id from users where user_id=${user_id}
  `
  const incidents: TableData[] = await sql`
  select * from incidents left join clusters using (cluster_id) where cluster_id=${cluster_id[0].cluster_id}
  `
  const members: Array<object> = await sql`
  select name, email from users where cluster_id=${cluster_id[0].cluster_id}
    `

  return NextResponse.json([incidents, members]);

  } catch(err) {
    console.log('error', err)
    return NextResponse.json({
        message: `Error retrieving alerts.`
    });
}
  
};
