 'use client';

 import * as React from 'react';
 import {
   DataGrid,
   GridCellModes,
   GridRowModel,
   GridColDef,
   GridRowId,
   GridRowsProp,
 } from '@mui/x-data-grid';
 import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Table = (props: Array<Object>) => {


   const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher) 

   if (error) return <div> failed to load</div>
   if (isLoading) return <div>loading...</div>

   console.log('data', data);

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
         getRowId={(alerts) => alerts.id}
         rows={data}
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
     field: 'userId', 
     headerName: 'User ID', 
     width: 225, 
     editable: false ,
     type: 'number',
     headerClassName: 'column-header',
   },
   {
     field: 'id',
     headerName: 'Alert ID',
     type: 'number',
     editable: false,
     align: 'left',
     headerAlign: 'left',
     width: 150,
     headerClassName: 'column-header', 
   },
   {
     field: 'title',
     headerName: 'Title',
     type: 'string',
     width: 450,
     editable: true,
     headerClassName: 'column-header',
   },
   {
     field: 'body',
     headerName: 'Post',
     type: 'string',
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





 
 // import React from 'react'
 
 // interface Alert {
 //   userId: number;
 //   id: number;
 //   title: string;
 //   body: string;
 // }
 
 // const Incidents = async () => {
 
 //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
 //   const posts: Alert[] = await res.json();
 
 
 
 //   return (
 //     <>
 //     <h1>Posts</h1>
 //     <ul>
 //       {posts.map(post => <li key={post.id} style={{marginLeft: 350, marginRight: 100, marginBottom: 50, textAlign: 'center'}}>{post.body}</li>)}
 //     </ul>
 //     </>
 //   )
 
 // }
 
//  export const getServerSideProps = async () => {
//     const apiData = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const response = await apiData.json();
//     return {
//         props: {
//             alerts: response
//         }
//     }
//  }

 export default Table