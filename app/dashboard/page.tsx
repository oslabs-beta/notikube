//dynamically rendered server side component (ideally)

//import Link from 'next/link'; //LINK IS CURRENTLY CAUSING ERROR:Internal error: TypeError: Cannot read properties of null (reading 'useContext')
import Metrics from '../_components/homePage/metrics';
import { ClusterHealth, NodeHealth } from '../_components/homePage/clusterHealth';
import { clusterInfo } from '../lib/homePage/clusterInfo';
import { Suspense } from 'react'
import type { Metadata } from "next";

//import '../globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Cluster dashboard current alerts and health visualizations'
}

//ADD APIRAAM'S AUTH CODE
  //GRAB USER NAME

export default async function Dashboard() {
  //Grab user name from authentication
  const { clustername, clusterip } = await clusterInfo();

    return (
      <div>
        <div className='p-4 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <h2 className="pl-8 py-1 ">{clustername}</h2>
          <h2 className="pl-8 py-1 ">Cluster IP Address: {clusterip}</h2>
          <div>

          <Suspense fallback={<h3>Loading...</h3>}>
            <Metrics />
          </Suspense>
          <Suspense fallback={<h3>Loading...</h3>}>
            <ClusterHealth />
          </Suspense>
          <Suspense fallback={<h3>Loading...</h3>}>
            <NodeHealth />
          </Suspense>
          
          </div>
        </div>
    </div>
    );
}

//Parallel route the node and cluster health sections to load at the same time? https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  //create modal with this technique for cluster connection? https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals

//review optimizations when done: https://nextjs.org/docs/app/building-your-application/optimizing
//testing with JEST: https://nextjs.org/docs/app/building-your-application/testing/jest
