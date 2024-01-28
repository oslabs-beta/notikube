"use client"

import { FormEvent } from 'react';

export default function EditCluster (props: {clusterName:string, clusterIp:string, cluster_id?:string, change_cluster: Function, change_edit: Function}) {


  async function editCluster(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    let body:{cluster_name?: string, cluster_ip?: string, cluster_id?:string} = {}

    body.cluster_name = formData.get('cluster_name')?.toString();
    body.cluster_ip = formData.get('cluster_ip')?.toString();
    body.cluster_id = props.cluster_id

    if (body !== undefined) {
    const response = await fetch('/api/updateCluster/edit', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  props.change_cluster(body.cluster_name, body.cluster_ip);

  alert('Changes saved')

  props.change_edit();
  
}

    return (

      <div className="w-screen" >
        <form onSubmit={editCluster}>
          <div className="grid grid-cols-2 gap-8 w-4/5 resize">
            <div className="w-screen">
              <p className="font-bold pb-2 text-xl mt-6">Cluster Name:</p>
              <input name="cluster_name" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={props.clusterName} />
              <br></br>
              <br></br>
              <p className="font-bold pb-2 text-xl">Cluster IP:</p>
              <input name="cluster_ip" className="border-2 border-red-800 p-2 pl-4 rounded-md w-1/3" defaultValue={props.clusterIp} />
              <br></br>
              <button className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-32 mt-8 shadow-lg" type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    
    )

}