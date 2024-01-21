//dynamically rendered server side component (ideally)

//import Link from 'next/link'; //LINK IS CURRENTLY CAUSING ERROR:Internal error: TypeError: Cannot read properties of null (reading 'useContext')
import HomeAlerts from '../_components/homePage/homeAlerts';
import { ClusterHealth, NodeCPUHealth, PodHealth, PodRestartHealth } from '../_components/homePage/clusterMetrics';
import ClusterDetails from '../_components/homePage/clusterDetails';
import LoadingSpinner from '../_components/homePage/loadingSpinner';
import { Suspense } from 'react'
import type { Metadata } from "next";
import { Tab, TabList, TabGroup, TabPanel, TabPanels, Divider } from "@tremor/react";

//import '../globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Cluster dashboard current alerts and health visualizations'
}

//ADD APIRAAM'S AUTH CODE
  //GRAB USER ID AND PASS TO CLUSTER DETAILS

export default function Dashboard() {

    return (
      <div className="w-screen">
        <div className='p-2 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <Suspense fallback={<LoadingSpinner />}>
            <ClusterDetails userid={'12345'} />
          </Suspense>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <HomeAlerts />
            </Suspense>
            <Divider>Metrics</Divider>
            <TabGroup className="pl-8">
              <TabList color="red" variant="solid">
                <Tab>Node CPU</Tab>
                <Tab>Pod By NameSpace</Tab>
                <Tab>Pod Restarts</Tab>
                <Tab>Cluster</Tab>
              </TabList>
              <TabPanels >
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <NodeCPUHealth />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <PodHealth />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <PodRestartHealth />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <ClusterHealth />
                  </Suspense>
                </TabPanel>
              </TabPanels>
            </TabGroup>
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
