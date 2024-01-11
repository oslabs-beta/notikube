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
  


  return (
    
    <div style={{ height: 400, width: '100%' }}>
      {/* <Sidebar /> */}
      <div className='p-4 sm:ml-64'>
      <h1 className="text-left pl-0 py-3 text-5xl font-extrabold dark:text-white">Incident History</h1>
      <br></br>
      <br></br>
      {/* <DataGrid
        sx={{
        boxShadow: 2,
        border: 2,
        borderColor: 'black',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
        color: 'black',
        }}
        editMode='row'
        getRowId={(data) => data.timestamp}
        rows={data}
        columns={columns}
        processRowUpdate={updateTable}
        onProcessRowUpdateError={(() => console.log('Error processing row update'))}
        onRowEditStop={(params) => {
          console.log(params);
        }} */}
    </div>
    </div>
  );
}

const columns = [
  { 
    field: 'timestamp', 
    headerName: 'Timestamp', 
    width: 225, 
    editable: false ,
    headerClassName: 'column-header',
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    editable: true,
    align: 'left',
    headerAlign: 'left',
    width: 150,
    headerClassName: 'column-header', 
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 450,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'singleSelect',
    width: 125,
    editable: true,
    headerClassName: 'column-header',
    valueOptions: ['High', 'Med', 'Low']
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'singleSelect',
    width: 125,
    editable: true,
    headerClassName: 'column-header',
    valueOptions: ['Open', 'Closed', 'Reassigned', 'In Progress']
  },
];
