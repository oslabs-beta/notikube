//dynamically rendered server side component (ideally)

//import Link from 'next/link'; //LINK IS CURRENTLY CAUSING ERROR:Internal error: TypeError: Cannot read properties of null (reading 'useContext')
import HomeAlerts from '../_components/homePage/homeAlerts';
import { ClusterHealth, NodeHealth } from '../_components/homePage/clusterHealth';
import ClusterDetails from '../_components/homePage/clusterDetails';
import LoadingSpinner from '../_components/homePage/loadingSpinner';
import { Suspense } from 'react'
import type { Metadata } from "next";

//import '../globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Cluster dashboard current alerts and health visualizations'
}

//ADD APIRAAM'S AUTH CODE
  //GRAB USER ID AND PASS TO CLUSTER DETAILS

export default function Dashboard() {

    return (
      <div>
        <div className='p-4 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <Suspense fallback={<LoadingSpinner />}>
            <ClusterDetails userid={'12345'} />
          </Suspense>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <HomeAlerts />
            </Suspense>
            <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Cluster</h3>
            <Suspense fallback={<LoadingSpinner />}>
              <ClusterHealth />
            </Suspense>
            <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Nodes</h3>
            <Suspense fallback={<LoadingSpinner />}>
              <NodeHealth />
            </Suspense>
          </div>
        </div>
    </div>
    );
}

//Parallel route the node and cluster health sections to load at the same time? https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  //create modal with this technique for cluster connection? https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals

//replace fallback loadings with loading spinner or custom skeleton

//review optimizations when done: https://nextjs.org/docs/app/building-your-application/optimizing
//testing with JEST: https://nextjs.org/docs/app/building-your-application/testing/jest
