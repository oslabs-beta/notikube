'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Incident } from '../../../../types/definitions';
import PermanentDetails from '../../../_components/incident-details/PermanentDetails';
import EditDetails from '../../../_components/incident-details/EditDetails';
import EditForm from '../../../_components/incident-details/EditForm';


export default function IncidentDetails({params}: {params: {incident_id: any}}) {

  const {incident_id} = params;
  const [incidentDetails, setIncidentDetails] = useState<Incident>();
  const [edit, setEdit] = useState<boolean>(false);

  async function fetchIncident() {
    if (incident_id !== undefined) {
    let res = await fetch(`http://localhost:3000/api/incidents/incidentDetails/${incident_id}`)
    const data: Incident[] = await res.json();
    setIncidentDetails(data[0]);
    }
  }

  useEffect(() => {
    fetchIncident();
  },[])
  
  const memberArray: Array<string> = [];

  function memberArrayFunc() {
    incidentDetails?.members.forEach((e) => {
      memberArray.push(e.name)
  })
}

  if (incidentDetails?.members !== undefined) {
    memberArrayFunc();
}

  while (edit === false) {

  return (
    <div className='w-screen'>
    <p className="text-2xl" >Incident Details: <b>{incidentDetails?.incident_title}</b></p>
    <br></br>
    <br></br>
    <PermanentDetails date={incidentDetails?.incident_date} cluster_name={incidentDetails?.cluster_name} />
    <br></br>
    <EditDetails title={incidentDetails?.incident_title} description={incidentDetails?.description} priority={incidentDetails?.priority_level} status={incidentDetails?.incident_status} notes={incidentDetails?.comment} assigned_to={incidentDetails?.incident_assigned_to} assigned_by={incidentDetails?.incident_assigned_by} assigned_date={incidentDetails?.incident_assigned_date} due_date={incidentDetails?.incident_due_date} type={incidentDetails?.incident_type} />
    <br></br>
    <button className="bg-red-800 text-white min-w-40 min-h-12" onClick={() => setEdit(true)}>Edit</button>
    </div>
  )
}

return (
  <div className='w-screen'>
    <h2 className="text-2xl">Incident Details: <b>{incidentDetails?.incident_title}</b></h2>
    <br></br>
    <br></br>
    <PermanentDetails date={incidentDetails?.incident_date} cluster_name={incidentDetails?.cluster_name} />
    <br></br>
    <br></br>
    <EditForm incident_id={incident_id} title={incidentDetails?.incident_title} description={incidentDetails?.description} priority={incidentDetails?.priority_level} status={incidentDetails?.incident_status} notes={incidentDetails?.comment} assigned_to={incidentDetails?.incident_assigned_to} assigned_by={incidentDetails?.incident_assigned_by} assigned_date={incidentDetails?.incident_assigned_date} due_date={incidentDetails?.incident_assigned_date} type={incidentDetails?.incident_type} members={memberArray} cluster_id={incidentDetails?.cluster_id} />
    <br></br>
    <button className="bg-red-800 text-white min-w-40 min-h-12" onClick={() => setEdit(false)}>Cancel</button>
  </div>
)




}