import * as React from 'react';
import { FormEvent } from 'react';
import {useRouter} from 'next/navigation';
import { EditDetailsType, Incident, UserName } from '../../../types/definitions'


const EditForm = (props: EditDetailsType) => {

  let memberArray: Array<string> = [];

  function getMembers(array: Array<UserName>) {
    for (let i = 0; i < array.length; i++) {
      memberArray.push(array[i].name)
    }
  };

  if (props.members !== undefined) {
    getMembers(props.members);
  }

  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    let body: Incident = JSON.parse(JSON.stringify(props));

    if (props.incident_id !== undefined && props.cluster_id !== undefined && props.incident_date !== undefined) {
      body.incident_id = props.incident_id;
      body.cluster_id = props.cluster_id;
      body.incident_date = props.incident_date;
    }
    
    let newState: Incident = body;

    for (let key in body) {
      if (key !== 'members') {
      for (let pair of formData.entries()) {
        if (key === pair[0] && body[key as keyof typeof body] !== pair[1].toString() && pair[1].toString() !== 'mm/dd/yyyy') {
          body[key as keyof typeof body] = pair[1].toString();
        }
          newState[key as keyof typeof newState] = body[key as keyof typeof body]
      }
    }
  }
  console.log('new state', newState)

  console.log('assigned_by', formData.get('incident_assigned_by'))
    
    if (props.updateEdit !== undefined) {
      props.updateEdit(newState);
    };


    const response = await fetch('/api/incidents/updateDetails',{
      method:'POST',
      body: JSON.stringify(body),
    })

  };

  let incident_due_date: (string | undefined) = '';
  let incident_assigned_date: (string | undefined) = '';


  if (props.incident_due_date === '') {
    incident_due_date = 'mm/dd/yyyy'
  } else {
    incident_due_date = props.incident_due_date
  }

  if (props.incident_due_date === '') {
    incident_assigned_date = 'mm/dd/yyyy'
  } else {
    incident_assigned_date = props.incident_due_date
  }

  return (
    <div className="w-screen" >
      <form onSubmit={onSubmit}>   
        <div className="grid grid-cols-2 gap-8 w-4/5 resize">
          <div className="w-screen">
            <p className="font-bold pb-2 text-xl">Title:</p>
            <input name="incident_title" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={props.incident_title} />
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Priority:</p>
            <select name="priority_level" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.priority_level}>{props.priority_level}</option>
              <option value="Critical">Critical</option>
              <option value="Error">Error</option>
              <option value="Warning">Warning</option>
              <option value="Info">Info</option>
            </select>
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Assigned By:</p>
            <select name="incident_assigned_by" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.incident_assigned_by}>{props.incident_assigned_by}</option>
                {
                  memberArray.map((e) => <option key={e} value={e}>{e}</option>)
                }
            </select>
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Due Date:</p>
            <input name="incident_due_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={incident_due_date}/>                
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Notes:</p>
            <textarea name="comment" className="border-2 border-red-800 p-2 pl-4 rounded-md  text-wrap w-1/3 break-normal" defaultValue={props.comment}></textarea>
            <br></br>
            <button className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-40 h-12 mt-6 shadow-lg" type="submit">Submit Changes</button>
          </div>
          <div className="w-screen">
            <p className="font-bold pb-2 text-xl">Description:</p>
            <input name="description" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={props.description} />
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Status:</p>
            <select name="incident_status" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.incident_status}>{props.incident_status}</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="In Progress">In Progress</option>
            </select>
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Assigned To:</p>
            <select name="incident_assigned_to" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.incident_assigned_to}>{props.incident_assigned_to}</option>
                {
                  memberArray.map((e) => <option key={e} value={e}>{e}</option>)
                }
            </select>
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Assigned Date:</p>
            <input name="incident_assigned_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={incident_assigned_date} />                <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Type of Incident:</p>
            <input name="incident_type" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={props.incident_type} />
            <br></br>
            <br></br>
          </div>
        </div>
      </form>
    </div>
    )

};

export default EditForm;