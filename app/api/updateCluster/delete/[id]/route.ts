import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../../utils/db';

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {

  const {id} = params;

  try {

  await sql`
  update users set cluster_id=NULL where cluster_id=${id}
  `
  await sql`
  delete from incidents where cluster_id=${id}
`
  await sql`
    delete from clusters where cluster_id=${id}    
  `

  return NextResponse.json({message: 'success'});

  } catch(err) {
    console.log('error', err)
    return NextResponse.json({
        message: `Error deleting cluster.`
    });
}

};