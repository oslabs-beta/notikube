import { NextResponse } from "next/server"
import sql from "../../utils/db"

export default async function GET() {

  
  try {
    // let res = await sql`SELECT FROM clusters WHERE userid=${userid}`

    // let userCluster = res
    // return NextResponse.json({userCluster})
  } catch (err) {
    console.error('Error. Not able to get user\'s clusters', err)
  }
}