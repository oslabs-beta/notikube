'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Incident } from '../../../../types/definitions';


export default function IncidentDetails({params}: {params: {incident_id: any}}) {

  const {incident_id} = params;
  const [incidentDetails, setIncidentDetails] = useState<Incident>();

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

  console.log('incident details state', incidentDetails?.incident_date)

  return (
    <div>
    <h1>These are the details of incident: <b>{incidentDetails?.incident_title}</b></h1><br></br>
    </div>
  )
}