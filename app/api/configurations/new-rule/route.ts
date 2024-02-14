import { NextRequest, NextResponse} from 'next/server';
import sql from "../../../utils/db"
import { unstable_noStore as noStore } from 'next/cache';

//Set new rule - this works
export async function POST(request: Request) {
  // const test = {
  //   message: 'rule successful'
  // }
  // return new Response(JSON.stringify(test), {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   status: 201,
  // })
  const data = await request.json();
  console.log('incoming data:', data)
  //get cluster id
  const clusterID = await sql`SELECT clusters.cluster_id FROM clusters JOIN users ON clusters.cluster_id=users.cluster_id WHERE user_id=${data.user_id}`
  const clusterIDResult = clusterID[0].cluster_id;

  //check if alert type already exists for this cluster
  const checkRules = await sql`SELECT * FROM rules WHERE cluster_id=${clusterIDResult} AND rule_type=${data.rule_type}`
  console.log('check rules result:', checkRules)
  console.log('check rules length', checkRules.length)

  try {
    
    if(checkRules.length > 0){
      console.log('sorry, new rule not added - in post')
      return new Response(JSON.stringify('Sorry, cluster can only have one rule per type'), {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 200
      })
    }
    else{
      //if not, create new alert
      await sql`INSERT INTO rules (cluster_id, user_id, rule_type, rule_assign, rule_notify, rule_priority, rule_title, active) VALUES (${clusterIDResult}, ${data.user_id}, ${data.rule_type}, ${data.rule_assign}, ${data.rule_notify}, ${data.rule_priority}, ${data.rule_title}, TRUE)`
      console.log('new rule added - in post')
      return new Response(JSON.stringify('rule successfully added'), {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 201
      })
    }
  } 
  catch (err) {
    console.error('Error. Not able to set new rule:', err)
    return new Response(JSON.stringify(`error adding rule: ${err}`), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 400
    })
  }
}

//const checkRules = await sql`SELECT * FROM rules WHERE cluster_id=${clusterIDResult} AND rule_type=${data.rule_type}`