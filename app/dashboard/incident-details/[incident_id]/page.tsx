'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';

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
    <h1>This is the Incident Details page</h1>
  )
}