import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../../utils/db"
import { unstable_noStore as noStore } from 'next/cache';

//Update active value for rule to true or false depending on current state
export async function GET(request: NextRequest, {params}: {params: {rule_id: string}}) {
  noStore();
  const { rule_id } = params; 
  try {
    const active = await sql`SELECT active FROM rules WHERE rule_id=${rule_id}`
    const activeResult = active[0].active
    console.log('active result', activeResult)
    const switchResult = activeResult === true ? false : true;
    console.log('active new result', switchResult)
    const setNewResult = await sql`UPDATE rules SET active=${switchResult} WHERE rule_id=${rule_id}`
    const result = 'active changed'
    return NextResponse.json(result)
  } catch (err) {
    console.error('Error. Not able to get user\'s cluster\'s rules:', err)
  }
}