'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Incident } from '../../../../types/definitions';
import PermanentDetails from '../../../_components/incident-details/PermanentDetails';
import EditDetails from '../../../_components/incident-details/EditDetails';
import EditForm from '../../../_components/incident-details/EditForm';
import SnapshotData from '../../../_components/incident-details/SnapshotData/SnapshotData';
import { SnapshotDataDefinition } from '../../../../types/definitions';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function IncidentDetails({params}: {params: {incident_id: any}}) {

  const {incident_id} = params;
  const [incidentDetails, setIncidentDetails] = useState<Incident>();
  const [snapshotData, setSnapshotData] = useState<SnapshotDataDefinition>();
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchIncident() {
    if (incident_id !== undefined) {
    let res = await fetch(`http://localhost:3000/api/incidents/incidentDetails/${incident_id}`)
    const data: {incidentDetails: Incident[], snapshotData: SnapshotDataDefinition} = await res.json();
    setIncidentDetails(data.incidentDetails[0]);
    setSnapshotData(data.snapshotData);
    setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncident();
  },[]);
  
  const memberArray: Array<string> = [];

  function updateEdit(body: Incident) {

    if (incidentDetails) {
    body.cluster_ip = incidentDetails.cluster_ip;
    body.cluster_name = incidentDetails.cluster_name;
    body.metric_data_id = incidentDetails?.metric_data_id;
    }

    setIncidentDetails(body)
    setEdit(false);
    alert('Changes Saved');

  };

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

  while (edit === false) {

  
  // if snapshot === null and edit === false, return details without snapshot at top
  if (snapshotData == null) {
    return (
      <div className='w-screen'>
        <p className="text-5xl font-extrabold" >Incident Details</p>
      <div className="flex justify-between w-4/5">
        <p className="px-0 pt-2 text-left">{incidentDetails?.cluster_name}</p>
        <p className="px-0 pt-2 text-right">Cluster IP Address: {incidentDetails?.cluster_ip}</p>
      </div>
        <br></br>
        <br></br>
        <PermanentDetails date={incidentDetails?.incident_date} incident_type={incidentDetails?.incident_type} />
        <EditDetails incident_title={incidentDetails?.incident_title} description={incidentDetails?.description} priority_level={incidentDetails?.priority_level} incident_status={incidentDetails?.incident_status} comment={incidentDetails?.comment} incident_assigned_to={incidentDetails?.incident_assigned_to} incident_assigned_by={incidentDetails?.incident_assigned_by} incident_assigned_date={incidentDetails?.incident_assigned_date} incident_due_date={incidentDetails?.incident_due_date} incident_type={incidentDetails?.incident_type} />
        <br></br>
        <button className="bg-primary-500 text-white min-w-40 min-h-12" onClick={() => setEdit(true)}>Edit</button>
      </div>
    )
  }

  // if snapshot !== null and edit === false, return details with snapshot data
    return (
      <div>
        <p className="text-5xl font-extrabold" >Incident Details</p>
      <div className="flex justify-between">
        <p className="px-0 pt-2 text-left">{incidentDetails?.cluster_name}</p>
        <p className="px-0 pt-2 text-right">Cluster IP Address: {incidentDetails?.cluster_ip}</p>
      </div>
        <SnapshotData snapshotData={snapshotData} />
        <br></br>
        <br></br>
        <PermanentDetails date={incidentDetails?.incident_date} incident_type={incidentDetails?.incident_type} />
        <EditDetails incident_title={incidentDetails?.incident_title} description={incidentDetails?.description} priority_level={incidentDetails?.priority_level} incident_status={incidentDetails?.incident_status} comment={incidentDetails?.comment} incident_assigned_to={incidentDetails?.incident_assigned_to} incident_assigned_by={incidentDetails?.incident_assigned_by} incident_assigned_date={incidentDetails?.incident_assigned_date} incident_due_date={incidentDetails?.incident_due_date} incident_type={incidentDetails?.incident_type} />
        <button className="text-white bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 w-36 mt-8 shadow-lg focus:outline-none" onClick={() => setEdit(true)}>Edit</button>
      </div>
    )
  }

  // if edit === true, return edit form
  return (
    <div className=''>
      <p className="text-5xl font-extrabold" >Incident Details</p>
        <div className="flex justify-between">
          <p className="px-0 pt-2 text-left">{incidentDetails?.cluster_name}</p>
          <p className="px-0 pt-2 text-right">Cluster IP Address: {incidentDetails?.cluster_ip}</p>
        </div>
        <br></br>
        <br></br>
          <PermanentDetails date={incidentDetails?.incident_date} incident_type={incidentDetails?.incident_type} />
        <br></br>
          <EditForm incident_id={incident_id} incident_title={incidentDetails?.incident_title} description={incidentDetails?.description} priority_level={incidentDetails?.priority_level} incident_status={incidentDetails?.incident_status} comment={incidentDetails?.comment} incident_assigned_to={incidentDetails?.incident_assigned_to} incident_assigned_by={incidentDetails?.incident_assigned_by} incident_assigned_date={incidentDetails?.incident_assigned_date} incident_due_date={incidentDetails?.incident_due_date} incident_type={incidentDetails?.incident_type} members={incidentDetails?.members} cluster_id={incidentDetails?.cluster_id} updateEdit={updateEdit} incident_date={incidentDetails?.incident_date}/>
          <button className="text-white bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 w-40 mt-6 shadow-lg focus:outline-none" onClick={() => setEdit(false)}>Cancel</button>
      </div>
  )

};