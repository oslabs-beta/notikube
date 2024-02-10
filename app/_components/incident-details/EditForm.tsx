import * as React from 'react';
import { FormEvent } from 'react';
import {useRouter} from 'next/navigation';
import { Incident, UserName } from '../../../types/definitions'


const EditForm = (props: {
  incident_title?: string, 
  priority_level?: string,
  incident_status?: string,
  description?: string, 
  comment?: string,
  incident_assigned_to?: string,
  incident_assigned_by?: string,
  incident_assigned_date?: string,
  incident_due_date?: string,
  incident_type?: string,
  cluster_name?: string,
  incident_id?: string,
  cluster_id?: string,
  updateEdit?: Function,
  incident_date?: string, 
  memberProps?: [{name: string, email: string}],
}) => {

  // create new empty array to hold members
  let memberArray: Array<string> = [];
  
  // function to push members from props to member array
  function getMembers(array: Array<UserName>) {
    for (let i = 0; i < array.length; i++) {
      memberArray.push(array[i].name)
    }
  };

  // invoke function to push members from props to member array
  if (props.memberProps !== undefined) {
    getMembers(props.memberProps);
  }

  console.log('props members', props.memberProps)
  console.log('member array', memberArray)

  const router = useRouter();

  // function to handle submit when user saves edits
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // save old state to body object
    let body: Incident = JSON.parse(JSON.stringify(props));

    // if incident_id, cluster_id, and incident_date on props have data, assign them to body object
    if (props.incident_id !== undefined && props.cluster_id !== undefined && props.incident_date !== undefined) {
      body.incident_id = props.incident_id;
      body.cluster_id = props.cluster_id;
      body.incident_date = props.incident_date;
    }
    
    // declare newState object and assign it values of body (old state)
    let newState: Incident = body;

    // iterate through body object, comparing values to those of the submitted form
      // if keys match, but values don't, assign value of form to body
        // assign matching key:value pairs from body to newState
    for (let key in body) {
      if (key !== 'members' && key !== 'updateEdit') {
      for (let pair of formData.entries()) {
        if (key === pair[0] && body[key as keyof typeof body] !== pair[1].toString() && pair[1].toString() !== 'mm/dd/yyyy') {
          body[key as keyof typeof body] = pair[1].toString();
        }
          newState[key as keyof typeof newState] = body[key as keyof typeof body]
      }
    }
  }

    // update state on Table component with newState values (form values from edit page)
    if (props.updateEdit !== undefined) {
      props.updateEdit(newState);
    };

    // send post request with new values from form
    const response = await fetch('/api/incidents/updateDetails',{
      method:'POST',
      body: JSON.stringify(body),
    })

  };

  // create variables to hold due date and assigned date values
  let incident_due_date: (string | undefined) = '';
  let incident_assigned_date: (string | undefined) = '';

  // if props.incident_due_date or props.incident_assigned_date are empty, assign a placeholder value, otherwise, assign the props value from DB 
  if (props.incident_due_date === '') {
    incident_due_date = 'mm/dd/yyyy'
  } else {
    incident_due_date = props.incident_due_date
  }

  if (props.incident_assigned_date === '') {
    incident_assigned_date = 'mm/dd/yyyy'
  } else {
    incident_assigned_date = props.incident_assigned_date
  }


  return (
    <div className="" >
      <form onSubmit={onSubmit}>   
        <div className="grid grid-cols-2 gap-8 resize">
          <div className="w-screen">
            <p className="font-bold pb-2 pt-6 text-xl">Title:</p>
            <input name="incident_title" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3 text-wrap break-normal" defaultValue={props.incident_title} />
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
            <input name="incident_due_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={incident_due_date} />                
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Status:</p>
            <select name="incident_status" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.incident_status}>{props.incident_status}</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="In Progress">In Progress</option>
            </select>
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Notes:</p>
            <textarea name="comment" className="border-2 border-red-800 p-2 pl-4 rounded-md  text-wrap w-1/3 break-normal" defaultValue={props.comment}></textarea>
            <br></br>
            <button className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-40 h-12 mt-6 shadow-lg" type="submit">Save</button>
          </div>
          <div className="w-screen">
          <p className="font-bold pb-2 pt-6 text-xl">Priority:</p>
            <select name="priority_level" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
              <option defaultValue={props.priority_level}>{props.priority_level}</option>
              <option value="critical">critical</option>
              <option value="error">error</option>
              <option value="warning">warning</option>
              <option value="info">info</option>
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
            <input name="incident_assigned_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={incident_assigned_date} />
            <br></br>
            <p className="font-bold pb-2 pt-6 text-xl">Description:</p>
            <textarea name="description" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3 text-wrap break-normal" defaultValue={props.description}></textarea> 
            <br></br>
            <br></br>
          </div>
        </div>
      </form>
    </div>
    )

};

export default EditForm;