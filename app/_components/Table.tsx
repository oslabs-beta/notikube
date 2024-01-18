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
 import { useSession } from 'next-auth/react'


//const fetcher = (...args) => fetch(...args).then((res) => res.json())

type User = {
  userid: number,
  name: string,
  email: string,
  phone: number,
  slack: string,
  phoneString: string,
}

async function fetchData(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/api/incidents/getAlerts')
  return res.json()
}

const userPromise = fetchData()


const Table = () => {

  // const session = useSession().data;

  // const userId = session?.user.userid;

  let users: User[] = use(userPromise)

  // let numString: string

  // for (let key in users) {

  //   console.log('start of loop', users[key].phoneString)

  //   if (users[key].phone !== null) {
  //     numString = users[key].phone.toString();
  //   } else {
  //      numString = 'false';
  //   }

  //   if (numString.length === 10 && users[key].phoneString === null) {
  //     users[key].phoneString = '(' + numString.slice(0,2) + ') ' + numString.slice(3,5) + '-' + numString.slice(4);
  //   } else if (users[key].phoneString === null && numString.length !== null) {
  //     users[key].phoneString = '--- --- ----'
  //   } else if (users[key].phoneString !== '--- --- ----' && users[key].phoneString.length !== 14) {
  //     users[key].phoneString = '(' + users[key].phoneString.slice(0,3) + ') ' + users[key].phoneString.slice(3,6) + '-' + users[key].phoneString.slice(6);
  //   }

  //   console.log('end of loop', users[key].phoneString)

  // }

  const updateTable = React.useCallback(
    async (newRow: GridRowModel) => {
      const updatedRow = { ...newRow };
      updatedRow.id = newRow.userid;
      fetch('http://localhost:3000/api/incidents/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRow)
      });
      console.log('updated row', updatedRow);
      return updatedRow;
      },[]);

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
         processRowUpdate={updateTable}
         onProcessRowUpdateError={(() => console.log('Error processing row update'))}
         onRowEditStop={(params) => {
           console.log('params', params);
         }}
       />
     </div>
   );
 }
 
 const columns: GridColDef[] = [
   { 
     field: 'userid', 
     headerName: 'User ID', 
     width: 300, 
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
     editable: true,
     align: 'left',
     headerAlign: 'left',
     width: 175,
     headerClassName: 'column-header', 
   },
   {
     field: 'email',
     headerName: 'Email',
     type: 'string',
     width: 175,
     editable: true,
     headerClassName: 'column-header',
   },
   {
     field: 'slack',
     headerName: 'Slack',
     type: 'string',
     width: 175,
     editable: true,
     headerClassName: 'column-header'
   },
   {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 200,
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