import * as React from 'react';
import { FormEvent } from 'react';
import { Datepicker } from 'flowbite-react';
import {useRouter} from 'next/navigation';

type EditDetails = {
    title?: string, 
    priority?: string,
    status?: string,
    description?: string, 
    notes?: string,
    assigned_to?: string,
    assigned_by?: string,
    assigned_date?: string,
    due_date?: string,
    type?: string,
    cluster_name?: string,
    members?: Array<string>,
    incident_id: string,
    cluster_id?: string,
}


const EditForm = (props: EditDetails) => {

    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const body: EditDetails = {};
        const formData = new FormData(event.currentTarget)

        if (formData.get('priority') !== '') {
            body.priority = formData.get('priority');
        } else {
            body.priority = props.priority
        }
        if (formData.get('title') !== "") {
            body.title = formData.get('title');
        } else {
            body.title = props.title
        }
        if (formData.get('description') !== "") {
            body.description = formData.get('description');
        } else {
            body.description = props.description
        }
        if (formData.get('status') !== '') {
            body.status = formData.get('status');
        } else {
            body.status = props.status
        }
        if (formData.get('assigned_to') !== '') {
            body.assigned_to = formData.get('assigned_to');
        } else {
            body.assigned_to = props.assigned_to
        }
        if (formData.get('assigned_by') !== '') {
            body.assigned_by = formData.get('assigned_by');
        } else {
            body.assigned_by = props.assigned_by
        }
        if (formData.get('assigned_date') !== '') {
            body.assigned_date = formData.get('assigned_date');
        } else {
            body.assigned_date = props.assigned_date
        }
        if (formData.get('notes') !== '') {
            body.notes = formData.get('notes');
        } else {
            body.notes = props.notes
        }
        if (formData.get('type') !== '') {
            body.type = formData.get('type');
        } else {
            body.type = props.type
        }
        if (formData.get('due_date') !== '') {
            body.due_date = formData.get('due_date');
        } else {
            body.due_date = props.due_date
        }
        body.incident_id = props.incident_id;
        body.cluster_id = props.cluster_id

        const response = await fetch('http://localhost:3000/api/incidents/updateDetails',{
            method:'POST',
            body: JSON.stringify(body),
        })

        window.location.reload();

    }


    return (
        <div className="w-screen" >
        <form onSubmit={onSubmit}>   
          <div className="grid grid-cols-2 gap-8 w-4/5 resize">
            <div className="w-screen">
                <p className="font-bold pb-2 text-xl">Title:</p>
                <input name="title" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" placeholder={props.title} />
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Priority:</p>
                <select name="priority" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
                    <option defaultValue={props.priority}>{props.priority}</option>
                    <option value="Critical">Critical</option>
                    <option value="Error">Error</option>
                    <option value="Warning">Warning</option>
                    <option value="Info">Info</option>
                </select>
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Assigned By:</p>
                <select name="assigned_by" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
                    {
                        props.members.map((e) => <option key={e} value={e}>{e}</option>)
                    }
                </select>
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Due Date:</p>
                <input name="due_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" placeholder={props.due_date} />
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Notes:</p>
                <textarea name="notes" className="border-2 border-red-800 p-2 pl-4 rounded-md  text-wrap w-1/3 break-normal">{props.notes}</textarea>
                <br></br>
                <br></br>
                <br></br>
                <button className="border-2 border-red-800 bg-red-800 text-white p-2 pl-4 rounded-md min-w-40 min-h-12" type="submit">Submit Changes</button>
            </div>
            <div className="w-screen">
                <p className="font-bold pb-2 text-xl">Description:</p>
                <input name="description" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" placeholder={props.description} />
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Status:</p>
                <select name="status" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
                    <option defaultValue={props.status}>{props.status}</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="In Progress">In Progress</option>
                </select>
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Assigned To:</p>
                <select name="assigned_to" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3">
                    {
                        props.members.map((e) => <option key={e} value={e}>{e}</option>)
                    }
                    </select>
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Assigned Date:</p>
                <input name="assigned_date" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" placeholder={props.assigned_date} />
                <br></br>
                <p className="font-bold pb-2 pt-6 text-xl">Type of Incident:</p>
                <input name="type" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" placeholder={props.type} />
                <br></br>
                <br></br>
            </div>
        </div>
        </form>
        </div>
    )

}

export default EditForm;