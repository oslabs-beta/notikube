 'use client';

import * as React from 'react';
import Table from '../../_components/Table'


const Incidents = () => {


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='p-4 sm:ml-64'>
      <h1 className="text-left pl-0 py-3 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <br></br>
      <br></br>
      <Table />
      </div>
      </div>
      )
      }

export default Incidents