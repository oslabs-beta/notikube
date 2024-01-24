'use client'

import { Label, TextInput } from 'flowbite-react';

export default function IncidentDetails() {
  //Grab incident id and pass to h1 element.


  return (
    <div>
      <h1 className="text-left pl-8 text-5xl font-extrabold dark:text-white">Insert Incident</h1>
      <section>
        <div id='incident-row-1' className='display: inline-flex'>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="email3" value="Your email" />
                </div>
                    <TextInput
                        id="email3"
                        type="text"
                        placeholder="name@flowbite.com"
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