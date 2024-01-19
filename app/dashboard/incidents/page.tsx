 'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';
import Table from '../../_components/Table'

async function handleClick() {
  fetch('http://localhost:3000/api/addUser')
  console.log('button click');
}

export default function Incidents() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='p-4 sm:ml-64'>
      <h1 className="text-left pl-0 py-0 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <button onClick={handleClick}>Send Email</button>
      <br></br>
      <br></br>
      <Table />
      </div>
      </div>
      )
  }