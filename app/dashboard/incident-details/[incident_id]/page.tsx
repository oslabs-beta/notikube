'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { IncidentDetail, Incident } from '../../../../types/definitions';
import { Label, TextInput } from 'flowbite-react';

async function fetchIncident({params}: {params: {incident_id: string}}) {
  const {incident_id} = params;
  try{
    let res = await fetch(`http://localhost:3000/api/incidents/incidentDetails/${incident_id}`)
    const data: Incident[] = await res.json();
    const incidentDetailsObj = {
      incident_id: data[0].incident_id,
      cluster_id: data[0].cluster_id,
      incident_date: data[0].incident_date,
      incident_type: data[0].incident_type,
      description: data[0].description,
      priority_level: data[0].priority_level,
      incident_title: data[0].incident_title,
      incident_status: data[0].incident_status,
      comment: data[0].comment,
      incident_assigned_to: data[0].incident_assigned_to,
      metric_data_id: data[0].metric_data_id
    }
    return incidentDetailsObj;
  }
  catch(e){
    throw new Error(`error retrieving incident details: ${e}`)
  }
}

export default function IncidentDetails({params}: {params: {incident_id: string}}) {

  const {incident_id} = params;
  const [incidentDetails, setIncidentDetails] = useState(fetchIncident);

  function updateIncident(){
    fetch(`http://localhost:3000/api/incidents/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(IncidentDetails)
      });
  }

  console.log('incident details state', incidentDetails?.incident_date)

  return (
    <div>
      <h1 className="text-left pl-8 text-5xl font-extrabold dark:text-white">Incident</h1>
      <section className='items-center p-2'>
        <div id='incident-row-1' className='display: inline-flex'>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="incident_title" value="Incident Title" />
                </div>
                <TextInput
                    id="incident_title"
                    value={incidentDetails.incident_title}
                    onChange={e => {
                      setIncidentDetails({
                        ...incidentDetails,
                        incident_title: e.target.value
                      })
                    }}
                    required
                />
            </div>
        </div>
        <div id='incident-row-2' className='display: inline-flex'>

        </div>
        <div id='incident-row-3' className='display: inline-flex'>

        </div>
        <div id='incident-row-4' className='display: inline-flex'>

        </div>
        <div id='incident-row-5' className='display: inline-flex'>

        </div>
        <div id='incident-row-6' className='display: inline-flex'>

        </div>
      </section>
    </div>
  )
}