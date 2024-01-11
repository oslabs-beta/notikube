import SignUpPage from "../../_components/SignUpPage";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import {authOptions} from "../../api/auth/[...nextauth]/route"

export default async function SignUp() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/incidents');
  }
  
  return <SignUpPage />
}