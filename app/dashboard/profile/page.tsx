'use client'

import Link from 'next/link';
import EmailSwitch from "../../_components/userPreferences/EmailSwitch";
import DeleteAcount from "../../_components/userPreferences/DeleteAccount";

export default function Profile() {

  const name = 'derek'
  const email = 'derek@test.com'

  // const users = sql`
  //   insert into users (name, email) values (${name}, ${email})
  // `
  return (
    <>
      <h1>This is the Profile Page</h1>
      <br></br>
      <EmailSwitch />
      <br></br>
      <DeleteAcount />
    </>
  );
}