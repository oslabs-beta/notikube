
import * as React from 'react';
import Table from '../../_components/Table'
import {redirect} from 'next/navigation';
import sql from '../../utils/db';
import {getServerSession} from 'next-auth';
import { authOptions } from "../../api/auth/[...nextauth]/route";



export default async function Incidents() {

  const session = await getServerSession(authOptions);
  const user_id = session?.user.userid;

  if (user_id !== undefined) {
  const cluster_id = await sql`
    select cluster_id from users where user_id=${user_id}
  `
  if (cluster_id[0].cluster_id === null) redirect('http://localhost:3000/dashboard/connect-cluster')

  }



  return (
    <div style={{width: '100%', margin:0, padding:0 }}>
      <div className="flex justify-between">
        <div className="">
        <h1 className="text-left pl-0 py-0 text-5xl font-extrabold dark:text-white">Incident History</h1>
        </div>
        <div className="self-end justify-end">
        </div>
      </div>
      <Table />
      </div>
      )
  }