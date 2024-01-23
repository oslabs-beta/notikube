import LoginPage from "../../_components/LoginPage";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import {authOptions} from "../../api/auth/[...nextauth]/route"

export default async function Login() {
  const session = await getServerSession(authOptions)
  if (session) {
    console.log('User ID: ', session.user.userid)
    redirect('/dashboard')
  }
  return <LoginPage />
}