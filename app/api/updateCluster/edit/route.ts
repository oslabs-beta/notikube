import { NextRequest, NextResponse} from 'next/server';
import sql from '../../../utils/db';

export async function POST(req: NextRequest, res: NextResponse) {

  const data = await req.json();

  try {

  await sql`
  update clusters set cluster_name=${data.cluster_name}, cluster_ip=${data.cluster_ip} where cluster_id=${data.cluster_id}
  `
  return NextResponse.json({message: 'successfully updated cluster information'})

  } catch(err) {
    console.log('error', err)
    return NextResponse.json({
        message: `Error updating cluster details.`
    });
}

}