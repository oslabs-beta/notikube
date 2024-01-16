 'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';
// import {
//   DataGrid,
//   GridCellModes,
  
// } from '@mui/x-data-grid';
import { useState, useEffect, useCallback } from 'react';
// import Sidebar from '../../components/Sidebar';

export default function Incidents() {

  const session = useSession().data
  
  //Getting userid data from the session
  console.log('User ID: ', session?.user.userid)

  const [ count, setCount ] = useState(0);
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);


  const getData = useCallback(() => {
    setLoading(true);
    const URL = '/api/tableData';
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log('json', json);
        setData(json);
      })
      .then((json) => console.log('data', data));
   
    setLoading(false);
  },[data]);
  
  useEffect(() => {
    getData();
  },[]);
    

  // const updateTable = React.useCallback(
  //   async (newRow) => {
  //     const updatedRow = { ...newRow };
  //     updatedRow.id = newRow.timestamp;
  //     fetch('/api/updateAlerts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newRow)
  //     });
  //     console.log('updated row', updatedRow);
  //     return updatedRow;
  //     },[]);
  
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