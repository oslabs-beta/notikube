import { useEffect, useState } from "react";

interface UserInfo {
  username: string,
  email: string
}

export default function UserInformationSidebar() {
  const [userInfo, setUserInfo] = useState<UserInfo>({ username: "", email: "" });

  // This function fetches the username and email from the api route
  async function getUserInformation() {
    try {
      const response = await fetch("/api/sidebar/get-user")
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const data = await response.json()
      setUserInfo({ username: data.username, email: data.email });
    } catch (err) {
      console.log("Error fetching users information", err)
    }
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <p>{userInfo.username}</p>
      <p>{userInfo.email}</p>
    </>
  )
}