import Sidebar from "../../_components/Sidebar";
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <h1>This is the Profile Page</h1>
      <Link href='/app'></Link>
    </>
  );
}