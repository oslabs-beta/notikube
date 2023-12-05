
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Alerts() {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const columns = [
        {
          name: 'Timestamp',
          selector: (row) => row.timestamp,
          sortable: true,
          width:'20%',
          fixedHeader: true,
        },
        {
          name: 'Type',
          selector: (row) => row.type,
          sortable: true,
        },
        {
          name: 'Description',
          selector: (row) => row.description,
          sortable: true,
          width:'30%',
        },
        {
          name: 'Priority',
          selector: (row) => row.priority,
          sortable: true,
        },
        {
          name: 'Status',
          selector: (row) => row.status,
          sortable: true,
        },
    ];

    const customStyles = {
        
        headCells: {
            style: {
                paddingLeft: '20px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor: 'silver',
                fontWeight: 'bold',
            },
        },
        cells: {
            style: {
                paddingLeft: '20px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };



    useEffect(() => {
        fetchData()
    },[]);

    function fetchData() {
      setLoading(true);
      //const URL = 'http://jsonplaceholder.typicode.com/users'
      const URL = '/api/tableData'
      fetch(URL)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log('json', json)
            setData(json)
        })
 
      setLoading(false);
    }

    return (
        <div className="Alerts">
        <h1>NotiKube Alert History</h1>
        <DataTable
          columns={columns}
          data={data}
          //selectableRows
          progressPending={loading}
          pagination={true}
          fixedHeader={true}
          customStyles={customStyles}
        />
        </div>
    )

}




export default Alerts;