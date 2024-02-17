'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridRowModel, GridColDef } from '@mui/x-data-grid';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Incident, UserName } from '../../types/definitions';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const Table = () => {

  const router = useRouter();

  const session = useSession().data;
  const userId = session?.user?.userid;

  const [incidentList, setIncidentList] = useState<Incident[]>([]);
  const [memberList, setMemberList] = useState<UserName[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [rowSort, setRowSort] = useState('none');

  let redirectURL = '';
  process.env.NODE_ENV === 'development' ? redirectURL = 'http://localhost:3000/dashboard/connect-cluster' : redirectURL = 'http://www.notikube.com/dashboard/connect-cluster'

  async function fetchData(user_id: (string | undefined)) {
    if (user_id !== undefined) {
    let res = await fetch(`/api/incidents/getAlerts/${user_id}`, {cache: 'no-store'})
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

  function handleRowColor(event:SelectChangeEvent) {
    setRowSort(event.target.value)
  }

  const columns: GridColDef[] = [
    {
      field: 'incident_date',
      headerName: '* Timestamp',
      minWidth: 200,
      type: 'string',
      editable: false,
      headerClassName: 'column-header',
    },
    {
      field: 'incident_type',
      headerName: '* Type',
      minWidth: 200,
      type: 'string',
      editable: false,
      headerClassName: 'column-header'
    },
    {
      field: 'description',
      headerName: 'Description',
      minWidth: 250,
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
      minWidth: 200,
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
    return ( 
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )}

  if (incidentList.length === 0) {
    return (
      <div className='mt-6 text-xl'>Congratulations, you have no incidents!</div>
    )
  }

  return (
    <div>
     <div className="flex justify-between">
        <p className="px-0 pt-2 mb-2 text-left">{incidentList[0].cluster_name}</p>
        <p className="px-0 pt-2 text-right">Cluster IP Address: {incidentList[0].cluster_ip}</p>
     </div>
     <br></br>
     <div className="flex justify-between align-bottom">
        <h2 className="mt-2 mb-2">Select a row to view/edit incident details</h2>
        <p className="px-0 pt-2 align-bottom text-left">Double click a cell to edit</p>
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
          ".orange": {
            bgcolor:"#fa8072",
            "&:hover": {
              bgcolor:"darkgray"
            }
          },
          ".blue": {
            bgcolor:"#F0FFFF",
            "&:hover": {
              bgcolor:"darkgray"
            }
          },
          ".darkblue": {
            bgcolor:"#ADD8E6",
            "&:hover": {
              bgcolor:"darkgray"
            }
          },
          ".odd": {
            bgcolor:"white",
            "&:hover": {
              bgcolor:"darkgray"
            }
          },
          ".even": {
            bgcolor:"#F8F8F8",
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
          if (rowSort  === 'priority') {
            if (params.row.priority_level === 'critical' || params.row.priority_level === 'error') {
              return 'orange'
            } else if (params.row.priority_level === 'warning') {
              return 'darkblue'
            } else {
              return 'blue'
            }
          } else if (rowSort === 'status') {
            if (params.row.incident_status === 'Open') {
              return 'orange'
            } else if (params.row.incident_status === 'In Progress') {
              return 'darkblue'
            } else {
              return 'blue'
            }
          } else {
            if (params.indexRelativeToCurrentPage % 2 === 0) {
              return 'even'
            } else {
              return 'odd'
            }
          }
         }}
         onRowSelectionModelChange={(newSelection) => {
          router.push(`/dashboard/incident-details/${newSelection}`)
         }}
         disableRowSelectionOnClick
         checkboxSelection={true}
       />
      <div className='flex justify-between mt-4'>
      <FormControl className='min-w-48' size='small'> 
      <InputLabel id="row-color" className='mb-2 h-5 w-40'>Row color</InputLabel>
        <Select
          sx={{
            marginTop: 1,
            marginBottom: 1,
            border: .5,
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
                border: 0,
              },
          }}
          labelId="row-color"
          id="row-color"
          value={rowSort}
          label={rowSort}
          onChange={handleRowColor}
          //disableUnderline={true}
        >
          <MenuItem value={'none'}>None</MenuItem>
          <MenuItem value={'priority'}>By Priority</MenuItem>
          <MenuItem value={'status'}>By Status</MenuItem>
        </Select>
        </FormControl>
        <h2 className="mt-2 mb-2">Go to <span onClick={() => router.push(redirectURL)} className='font-bold focus:outline-none text-blue-700 hover:text-primary-600'>Connect Cluster</span> page to add additional members</h2>
      </div>
    </div>
   )

};




 export default Table;