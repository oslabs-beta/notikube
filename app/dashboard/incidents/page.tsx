import * as React from 'react';
import { useSession } from 'next-auth/react';
import Table from '../../_components/Table'
import AddMemberComponent from '../../_components/AddMember';

async function handleClick() {
  fetch('http://localhost:3000/api/addUser')
  console.log('button click');
}

export default function Incidents() {

  return (
    <div style={{width: '100%', margin:0, padding:0 }}>
      <div style={{marginTop:0, paddingTop:0 }} className='p-4 sm:ml-64'>
      <AddMemberComponent />
      <br></br>
      <br></br>
      <h1 className="text-left pl-0 py-0 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <br></br>
      <Table />
      </div>
      </div>
      )
  }