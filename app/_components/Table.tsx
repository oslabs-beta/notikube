 'use client';

 import * as React from 'react';
 import { useState, useEffect } from 'react';
 import {
   DataGrid,
   GridRowModel,
   GridRowSelectionModel,
   GridColDef,
 } from '@mui/x-data-grid';
 import { useSession } from 'next-auth/react';
 import { useRouter } from 'next/navigation';
 import { Incident, UserName } from '../../types/definitions';
import IncidentDetails from '../dashboard/incident-details/[incident_id]/page';


const Table = () => {

  const router = useRouter();

  const session = useSession().data;
  const userId = session?.user?.userid;

  let [incidentList, setIncidentList] = useState<Incident[]>([]);
  let [memberList, setMemberList] = useState<UserName[]>([]);

  async function fetchData(user_id: (string | undefined)) {
    if (user_id !== undefined) {
    let res = await fetch(`http://localhost:3000/api/incidents/getAlerts/${user_id}`)
    const data: [Incident[], UserName[]] = await res.json();
    setIncidentList(data[0]);
    setMemberList(data[1]);
    }
  }

  let incidents: Incident[] = incidentList;
  let memberArray: UserName[] = memberList;
  let members: Array<string> = [];
 
  for (let key in memberArray) {
    members.push(memberArray[key].name)
  }

  members.push('');

  const updateTable = React.useCallback(
    async (newRow: GridRowModel) => {
      console.log('new row', newRow)
      const updatedRow = { ...newRow };
      updatedRow.id = newRow.incident_id;
      fetch(`http://localhost:3000/api/incidents/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRow)
      });
      return updatedRow;
      },[]);

  useEffect(() => {
    fetchData(userId);
  },[userId])


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
    minWidth: 125,
    type: 'string',
    editable: false,
    headerClassName: 'column-header'
  },
  {
   field: 'description',
   headerName: 'Description',
   minWidth: 350,
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
   valueOptions: ['Critical', 'Moderate', 'Low'],
 },
 { 
   field: 'incident_title', 
   headerName: 'Title', 
   minWidth: 225,
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
   valueOptions: ['Open', 'Closed', 'In Progress'],
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

   return (
    <div>
       <DataGrid
         sx={{
         boxShadow: 2,
         border: 2,
         borderColor: 'black',
         color: 'black',
         '& .MuiDataGrid-cell:hover': {
           color: 'primary.main',
         },
         ".red": {
          bgcolor:"#F2D7D5",
          "&:hover": {
            bgcolor:"darkgray"
          }
         },
         ".green": {
          bgcolor:"#D5F5E3",
          "&:hover": {
            bgcolor:"darkgray"
          }
         },
         ".orange": {
          bgcolor:"#FAE5D3",
          "&:hover": {
            bgcolor:"darkgray"
          }
         },
         "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
            display: "none",   
          },
         "& .MuiDataGrid-columnHeaders": {
            bgcolor: 'white',   
        },
        ".column-header": {
          bgcolor:"white",
          color:"black"
        }
         }}
         editMode='cell'
         getRowId={(incidents) => incidents.incident_id}
         rows={incidents}
         columns={columns}
         processRowUpdate={updateTable}
         onProcessRowUpdateError={(() => console.log('Error processing row update'))}
         onRowEditStop={(params) => {
           console.log('params', params);
         }}
         getRowClassName={(params) => {
          if (params.row.priority_level === 'Critical') {
            return "red"
          } else if (params.row.priority_level === 'Moderate') {
            return "orange"
          } else {
            return "green"
          }
        }
         }
         onRowSelectionModelChange={(newSelection) => {
            console.log('new selection', newSelection)
            router.push(`http://localhost:3000/dashboard/incident-details/${newSelection}`)
         }}
         disableRowSelectionOnClick
         checkboxSelection={true}
       />
       <h2 style={{marginTop:5}}>Select a Row to View Incident Details</h2>
     </div>
   );

}



 export default Table