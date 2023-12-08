import * as React from 'react';
import {
  DataGrid,
  GridCellModes,
  
} from '@mui/x-data-grid';
import { useState, useEffect, useCallback } from 'react';






function Alerts() {

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
    

  const updateTable = React.useCallback(
    async (newRow) => {
      const updatedRow = { ...newRow };
      updatedRow.id = newRow.timestamp;
      fetch('/api/updateAlerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRow)
      });
      console.log('updated row', updatedRow);
      return updatedRow;
      },[]);
  


  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1 style={{ color: 'black'}}>Incident History</h1>
      <br></br>
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
        getRowId={(data) => data.timestamp}
        rows={data}
        columns={columns}
        processRowUpdate={updateTable}
        onProcessRowUpdateError={(() => console.log('Error processing row update'))}
        onRowEditStop={(params) => {
          console.log(params);
        }}
      />
    </div>
  );
}

const columns = [
  { 
    field: 'timestamp', 
    headerName: 'Timestamp', 
    width: 180, 
    editable: false 
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'string',
    width: 220,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 220,
    editable: true,
  },
];


export default Alerts;