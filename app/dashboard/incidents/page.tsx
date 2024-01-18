 'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';
import Table from '../../_components/Table'

export default function Incidents() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='p-4 sm:ml-64'>
      <h1 className="text-left pl-0 py-0 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <br></br>
      <br></br>
      <Table />
      </div>
      </div>
      )
  }