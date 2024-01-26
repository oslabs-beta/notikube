import * as React from 'react';

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
    cluster_id?: string,
}

const EditDetails = (props: EditDetails) => {

    return (
       <div className="resize">
          <div className="grid grid-cols-2 gap-8 w-4/5 resize">
            <div className="">
                <p className="font-bold pb-2 pt-6 text-xl">Title:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.title}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Priority:</p>
                <h2 className="font-bold border-2 border-red-800 p-2 pl-4 shadow-xl rounded-md min-h-11">{props.priority}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Assigned By:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.assigned_by}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Due Date:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.due_date}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Notes:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11 whitespace-pre-line">{props.notes}</h2>
                <br></br>
            </div>
            <div className="">
                <p className="font-bold pb-2 pt-6 text-xl">Description:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.description}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Status:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.status}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Assigned To:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.assigned_to}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Assigned Date:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.assigned_date}</h2>
                <br></br>
                <p className="font-bold pb-2 text-xl">Type of Incident:</p>
                <h2 className="font-bold border-2 p-2 pl-4 border-red-800 shadow-xl rounded-md min-h-11">{props.type}</h2>
            </div>
            </div>
            </div>
    )


}

export default EditDetails;