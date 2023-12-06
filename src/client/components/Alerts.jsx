
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';

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
        
        headRow: {
            style: {
                //paddingLeft: '0px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor: 'silver',
                fontWeight: 'bold',
            },
        },
        cells: {
            style: {
                //paddingLeft: '20px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data.description, null, 2)}</pre>;



    useEffect(() => {
        fetchData();
    },[]);

    function fetchData() {
      setLoading(true);
      //const URL = 'http://jsonplaceholder.typicode.com/users'
      const URL = '/api/tableData';
      fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log('json', json);
            setData(json);
        });
 
      setLoading(false);
    }

    return (
        <div className="Alerts">
        <h1>NotiKube Alert History</h1>
        <Sidebar/>
        <DataTable
          columns={columns}
          data={data}
          progressPending={loading}
          pagination={true}
          fixedHeader={true}
          customStyles={customStyles}
          expandableRows 
          expandableRowsComponent={ExpandedComponent}
          selectableRows
        />
        </div>
    );

}




export default Alerts;