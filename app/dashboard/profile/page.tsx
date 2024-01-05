import Sidebar from "../../_components/Sidebar";
import Link from 'next/link';
import sql from '../../utils/db';

export default async function Profile() {

  const name = 'derek'
  const email = 'derek@test.com'

  const users = await sql`
    insert into users (name, email) values (${name}, ${email})
  `

  return (
    <>
      <h1>This is the Profile Page</h1>
      {JSON.stringify(users)}
      <Link href='/app'></Link>
    </>
  );
}