import * as React from 'react';
import { PermanentDetailsType } from '../../../types/definitions';


const PermanentDetails = (props: PermanentDetailsType) => {

  return (
    <div className=''>
      <div className="grid grid-cols-2 gap-8">
        <div className="">
          <p className="font-bold pb-2 text-xl" >Date of Incident:</p>
          <h2 className="border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11"><b>{props.date}</b></h2>
        </div>
        <div className="">
          <p className="font-bold pb-2 text-xl">Type of Incident:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11">{props.incident_type}</h2>
        </div>
      </div>
    </div>
  )


};

export default PermanentDetails;