'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
   DataGrid,
   GridRowModel,
   GridColDef,
 } 
 from '@mui/x-data-grid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Incident, UserName } from '../../types/definitions';



const Table = () => {

  const router = useRouter();

  const session = useSession().data;
  const userId = session?.user?.userid;

  const [incidentList, setIncidentList] = useState<Incident[]>([]);
  const [memberList, setMemberList] = useState<UserName[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData(user_id: (string | undefined)) {
    if (user_id !== undefined) {
    let res = await fetch(`/api/incidents/getAlerts/${user_id}`)
    const data: [Incident[], UserName[]] = await res.json();
    setIncidentList(data[0]);
    setMemberList(data[1]);
    setLoading(false);
    }  
  }

  let memberArray: UserName[] = memberList;
  let members: Array<string> = [];
 
  for (let key in memberArray) {
    members.push(memberArray[key].name)
  }

  members.push('');

  const updateTable = React.useCallback(
    async (newRow: GridRowModel) => {
      const updatedRow = { ...newRow };
      updatedRow.id = newRow.incident_id;
      fetch(`/api/incidents/update`, {
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
  },[userId]);

  const columns: GridColDef[] = [
    {
      field: 'incident_date',
      headerName: 'Timestamp',
      minWidth: 225,
      type: 'string',
      editable: false,
      headerClassName: 'column-header',
    },
    {
      field: 'incident_type',
      headerName: 'Type',
      minWidth: 425,
      type: 'string',
      editable: false,
      headerClassName: 'column-header'
    },
    {
      field: 'description',
      headerName: 'Description',
      minWidth: 275,
      type: 'string',
      editable: true,
      headerClassName: 'column-header'
    },
    { 
      field: 'priority_level', 
      headerName: 'Priority',
      minWidth: 125, 
      editable: true ,
      type: 'singleSelect',
      headerClassName: 'column-header',
      align: 'left',
      headerAlign: 'left',
      valueOptions: ['critical', 'warning', 'error', 'info'],
    },
    { 
      field: 'incident_title', 
      headerName: 'Title', 
      minWidth: 250,
      editable: true ,
      type: 'string',
      headerClassName: 'column-header',
      align: 'left',
      headerAlign: 'left',
    },
    { 
      field: 'incident_status', 
      headerName: 'Status', 
      minWidth: 150,
      editable: true ,
      type: 'singleSelect',
      headerClassName: 'column-header',
      align: 'left',
      headerAlign: 'left',
      valueOptions: ['Open', 'Closed', 'In Progress'],
    },
    { 
      field: 'incident_assigned_to', 
      headerName: 'Assigned To', 
      minWidth: 150,
      editable: true ,
      type: 'singleSelect',
      headerClassName: 'column-header',
      align: 'left',
      headerAlign: 'left',
      valueOptions: members,
    }
  ];

  while (loading) {
    return <div>loading incidents ...</div>
  }


  return (
    <div>
     <div className="flex justify-between">
        <p className="px-0 pt-2 mb-2 text-left">{incidentList[0].cluster_name}</p>
        <p className="px-0 pt-2 text-right">Cluster IP Address: {incidentList[0].cluster_ip}</p>
     </div>
       <DataGrid
         initialState={{
          sorting: {
            sortModel: [{field: 'incident_date', sort: 'desc'}]
          },
          pagination: {paginationModel: {pageSize: 10}},
         }}
         pageSizeOptions={[5,10,25,50]}
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
         getRowId={(incidentList) => incidentList.incident_id}
         rows={incidentList}
         columns={columns}
         processRowUpdate={updateTable}
         onProcessRowUpdateError={(() => console.log('Error processing row update'))}
         onRowEditStop={(params) => {
          console.log('params', params);
         }}
         getRowClassName={(params) => {
          if (params.row.priority_level === 'critical' || params.row.priority_level === 'error') {
            return "red"
          } else if (params.row.priority_level === 'warning') {
            return "orange"
          } else {
            return "green"
          }
         }}
         onRowSelectionModelChange={(newSelection) => {
          router.push(`/dashboard/incident-details/${newSelection}`)
         }}
         disableRowSelectionOnClick
         checkboxSelection={true}
       />
      <h2 className="mt-2 mb-2">Select a Row to View Incident Details</h2>
    </div>
   )
};



 export default Table;