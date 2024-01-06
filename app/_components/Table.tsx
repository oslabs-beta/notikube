 'use client';

 import * as React from 'react';
 import { useState, use } from 'react';
 import {
   DataGrid,
   GridCellModes,
   GridRowModel,
   GridColDef,
   GridRowId,
   GridRowsProp,
 } from '@mui/x-data-grid';
 import useSWR from 'swr'


//const fetcher = (...args) => fetch(...args).then((res) => res.json())

type User = {
  userid: number,
  name: string,
  email: string,
  phone: number,
  slack: string,
}

async function fetchData(): Promise<User[]> {
  const res = await fetch('/api/incidents')
  return res.json()
}

const userPromise = fetchData()


const Table = () => {

  const users: User[] = use(userPromise)

  console.log('users', users)

//  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher) 

//    if (error) return <div> failed to load</div>
//    if (isLoading) return <div>loading...</div>

   return (
    <div>
       <DataGrid
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
         getRowId={(users) => users.userid}
         rows={users}
         columns={columns}
         //processRowUpdate={updateTable}
         //onProcessRowUpdateError={(() => console.log('Error processing row update'))}
         //onRowEditStop={(params) => {
           //console.log(params);
         //}}
       />
     </div>
   );
 }
 
 const columns: GridColDef[] = [
   { 
     field: 'userid', 
     headerName: 'User ID', 
     width: 400, 
     editable: false ,
     type: 'number',
     headerClassName: 'column-header',
     align: 'left',
     headerAlign: 'left',
   },
   {
     field: 'name',
     headerName: 'Name',
     type: 'string',
     editable: false,
     align: 'left',
     headerAlign: 'left',
     width: 150,
     headerClassName: 'column-header', 
   },
   {
     field: 'email',
     headerName: 'Email',
     type: 'string',
     width: 450,
     editable: true,
     headerClassName: 'column-header',
   },
   {
     field: 'slack',
     headerName: 'Slack',
     type: 'string',
     width: 125,
     editable: true,
     headerClassName: 'column-header'
   },
   {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 125,
    editable: true,
    headerClassName: 'column-header'
  },
 ];
 

 // const columns: GridColDef[] = [
 //   { 
 //     field: 'timestamp', 
 //     headerName: 'Timestamp', 
 //     width: 225, 
 //     editable: false ,
 //     headerClassName: 'column-header',
 //   },
 //   {
 //     field: 'type',
 //     headerName: 'Type',
 //     type: 'string',
 //     editable: true,
 //     align: 'left',
 //     headerAlign: 'left',
 //     width: 150,
 //     headerClassName: 'column-header', 
 //   },
 //   {
 //     field: 'description',
 //     headerName: 'Description',
 //     type: 'string',
 //     width: 450,
 //     editable: true,
 //     headerClassName: 'column-header',
 //   },
 //   {
 //     field: 'priority',
 //     headerName: 'Priority',
 //     type: 'singleSelect',
 //     width: 125,
 //     editable: true,
 //     headerClassName: 'column-header',
 //     valueOptions: ['High', 'Med', 'Low']
 //   },
 //   {
 //     field: 'status',
 //     headerName: 'Status',
 //     type: 'singleSelect',
 //     width: 125,
 //     editable: true,
 //     headerClassName: 'column-header',
 //     valueOptions: ['Open', 'Closed', 'Reassigned', 'In Progress']
 //   },
 // ];


 export default Table