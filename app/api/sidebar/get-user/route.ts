import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  // Grabs user full name and email and sends back to UserInformationSidebar.tsx
  const session = await getServerSession(authOptions);
  const username = session?.user.name;
  const email = session?.user.email;

  try {
    return NextResponse.json({ username, email });
  } catch (err) {
    console.error("Could not get user information");
  }
}
