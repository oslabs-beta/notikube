import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const email = searchParams.get("email")
    console.log("email: ", email)
    const alertObject = await req.json()
    console.log(alertObject)


    return NextResponse.json(alertObject)
}