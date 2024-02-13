import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../../utils/db"

//Delete rule
export async function DELETE(request: NextRequest, {params}: {params: {rule_id: string}}) {
  const { rule_id } = params; 
  try {
    const deleteRule = await sql`DELETE FROM rules WHERE rule_id=${rule_id}`
    const response = 'rule successfully deleted'
    return NextResponse.json(response)
  } catch (err) {
    console.error('Error. Not able to delete rule:', err)
  }
}