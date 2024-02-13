import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../utils/db"

//Set new rule
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  try {
    //get cluster id
    const clusterID = await sql`SELECT clusters.cluster_id FROM clusters JOIN users ON clusters.cluster_id=users.cluster_id WHERE user_id=${data.user_id}`
    const clusterIDResult = clusterID[0].cluster_id;

    //check if alert type already exists for this cluster
    const checkRules = await sql`SELECT * FROM rules WHERE cluster_id=${clusterIDResult} AND rule_type=${data.rule_type}`
    console.log('check rules result:', checkRules)
    console.log('check rules length', checkRules.length)
    if(checkRules.length > 0){
      return NextResponse.json({message: 'Sorry, cluster can only have one rule per type'})
    }
    else{
      //if not, create new alert
      await sql`INSERT INTO rules (cluster_id, user_id, rule_type, rule_assign, rule_notify, rule_priority, rule_title, active) VALUES (${clusterIDResult}, ${data.user_id}, ${data.rule_type}, ${data.rule_assign}, ${data.rule_notify}, ${data.rule_priority}, ${data.rule_title}, TRUE)`
      return NextResponse.json({message: 'rule successfully added'})  
    }
  } 
  catch (err) {
    console.error('Error. Not able to set new rule:', err)
  }
}