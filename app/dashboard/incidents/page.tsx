import * as React from 'react';
import { useSession } from 'next-auth/react';
import Table from '../../_components/Table'
import AddMemberComponent from '../../_components/AddMember';



export default function Incidents() {

  return (
    <div style={{width: '100%', margin:0, padding:0 }}>
      <br></br>
      <br></br>
      <h1 className="text-left pl-0 py-0 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <br></br>
      <Table />
      <br></br>
      <br></br>
      <AddMemberComponent />
      </div>
      )
  }