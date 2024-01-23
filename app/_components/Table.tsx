 'use client';

 import * as React from 'react';
 import { useState, use, useEffect } from 'react';
 import {
   DataGrid,
   GridRowModel,
   GridColDef,
 } from '@mui/x-data-grid';
 import { useSession } from 'next-auth/react';


type Incident = {
  incident_id: string,
  incident_date: Date,
  incident_type: string,
  description: string,
  priority_level: string,
  incident_title: string,
  incident_status: string, 
  comment: string,
  incident_assigned_to: string,
  metric_data_id: string,
  cluster_id: string,
}

type UserName = {
  name: string,
  email: string,
}


const Table = () => {

  const session = useSession().data;
  console.log('session', session)
  const userId = session?.user?.userid;
  console.log('user id', userId)

  let [incidentList, setIncidentList] = useState<Incident[]>([]);
  let [memberList, setMemberList] = useState<UserName[]>([]);
  let [isLoading, setLoading] = useState(true)

 useEffect(() => {
  fetchData(userId);
 },[userId])

  async function fetchData(user_id: (string | undefined)) {
    if (user_id !== undefined) {
    let res = await fetch(`http://localhost:3000/api/incidents/getAlerts/${user_id}`)
    const data: [Incident[], UserName[]] = await res.json();
    setIncidentList(data[0]);
    setMemberList(data[1]);
    setLoading(false);
    }
  }

  let incidents: Incident[] = incidentList;
  let memberArray: UserName[] = memberList;
  let members: Array<string> = [];
 
  for (let key in memberArray) {
    members.push(memberArray[key].email)
  }

  members.push('');


  const updateTable = React.useCallback(
    async (newRow: GridRowModel) => {
      const updatedRow = { ...newRow };
      updatedRow.id = newRow.incident_id;
      fetch('http://localhost:3000/api/incidents/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRow)
      });
      return updatedRow;
      },[]);


const columns: GridColDef[] = [
  {
    field: 'incident_date',
    headerName: 'Timestamp',
    minWidth: 200,
    type: 'string',
    editable: false,
    headerClassName: 'column-header',
  },
  {
    field: 'incident_type',
    headerName: 'Type',
    minWidth: 100,
    type: 'string',
    editable: false,
    headerClassName: 'column-header'
  },
  {
   field: 'description',
   headerName: 'Description',
   minWidth: 175,
   type: 'string',
   editable: true,
   headerClassName: 'column-header'
 },
 { 
   field: 'priority_level', 
   headerName: 'Priority',
   minWidth: 100, 
   editable: true ,
   type: 'singleSelect',
   headerClassName: 'column-header',
   align: 'left',
   headerAlign: 'left',
   valueOptions: ['Warning', 'Critical', 'Moderate', 'High'],
 },
 { 
   field: 'incident_title', 
   headerName: 'Title', 
   minWidth: 150,
   editable: true ,
   type: 'string',
   headerClassName: 'column-header',
   align: 'left',
   headerAlign: 'left',
 },
 { 
   field: 'incident_status', 
   headerName: 'Status', 
   minWidth: 125,
   editable: true ,
   type: 'singleSelect',
   headerClassName: 'column-header',
   align: 'left',
   headerAlign: 'left',
   valueOptions: ['Open', 'In Progress', 'Closed'],
 },
 { 
   field: 'comment', 
   headerName: 'Notes',
   minWidth: 400, 
   editable: true ,
   type: 'string',
   headerClassName: 'column-header',
   align: 'left',
   headerAlign: 'left',
 },
 { 
   field: 'incident_assigned_to', 
   headerName: 'Assigned To', 
   minWidth: 200,
   editable: true ,
   type: 'singleSelect',
   headerClassName: 'column-header',
   align: 'left',
   headerAlign: 'left',
   valueOptions: members,
}
];

while (isLoading) {
  return <div>... Loading</div>
}

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
         getRowId={(incidents) => incidents.incident_id}
         rows={incidents}
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



 export default Table