import Sidebar from "../../_components/Sidebar";
import Link from 'next/link';
import sql from '../../utils/db';

export default async function Profile() {

  const users = await sql`
    select * from users where name='jesse'
  `
  return (
    <>
      <h1>This is the Profile Page</h1>
      {JSON.stringify(users)}
      <Link href='/app'></Link>
    </>
  );
}