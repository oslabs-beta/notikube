import * as React from 'react';


type PermanentDetails = {
    date?: string,
    cluster_name?: string,  
}


const PermanentDetails = (props: PermanentDetails) => {

    return (
        <div className='w-screen'>
          <div className="grid grid-cols-2 gap-8 w-5/6">
            <div className="w-full">
                <p className="font-bold pb-2 text-xl" >Date of Incident:</p>
                <h2 className="border-2 p-2 pl-4 border-red-800 shadow-lg rounded-md min-h-11"><b>{props.date}</b></h2>
            </div>
            <div className="w-full">
                <p className="font-bold pb-2 text-xl">Cluster Name:</p>
                <h2 className="border-2 p-2 pl-4 border-red-800 shadow-lg rounded-md min-h-11"><b>{props.cluster_name}</b></h2>
            </div>
            </div>
            </div>
    )


}

export default PermanentDetails;