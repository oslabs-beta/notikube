import * as React from 'react';
import { EditDetailsType } from '../../../types/definitions'



const EditDetails = (props: EditDetailsType) => {

  return (
    <div className="resize">
      <div className="grid grid-cols-2 gap-8 resize">
        <div className="">
          <br></br>
          <p className="font-bold pb-2 text-xl">Title:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_title}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Assigned By:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_assigned_by}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Due Date:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_due_date}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Status:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_status}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Notes:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.comment}</h2>
          <br></br>
        </div>
        <div className="">
          <p className="font-bold pb-2 pt-6 text-xl">Priority:</p>
          <h2 className="font-bold border-2 border-black p-2 pl-4 shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.priority_level}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Assigned To:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_assigned_to}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Assigned Date:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.incident_assigned_date}</h2>
          <br></br>
          <p className="font-bold pb-2 text-xl">Description:</p>
          <h2 className="font-bold border-2 p-2 pl-4 border-black shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.description}</h2>
          <br></br>
        </div>
      </div>
    </div>
  )


};

export default EditDetails;