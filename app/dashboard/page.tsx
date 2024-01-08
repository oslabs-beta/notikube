//dynamic rendered server side component

//import Link from 'next/link'; LINK IS CURRENTLY CAUSING ERROR:Internal error: TypeError: Cannot read properties of null (reading 'useContext')
import { numProgressAlerts, numTotalAlerts } from '../lib/homePage/numOfAlerts'
import { clusterInfo } from '../lib/homePage/clusterInfo';

//import '../globals.css'

//Can you add metadata for specific pages?
// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Cluster dashboard current alerts and health visualizations'
// }

//ADD APIRAAM'S AUTH CODE
  //GRAB USER NAME

export default async function Dashboard() {
  //Grab user name from authentication
  const { clustername, clusterip } = await clusterInfo();
  const totalInProgressAlerts = await numProgressAlerts();
  const totalAlerts = await numTotalAlerts();

    return (
      <div>
        <div className='p-4 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <h2 className="">{clustername}</h2>
          <h2 className="">Cluster IP Address: {clusterip}</h2>
          <div>

          <div id='metrics'>
            <section>
              <div id='dashboard-alerts'className='my-5 display: inline-flex'>
                <a href="/dashboard/incidents" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Open Alerts</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{totalAlerts}</p>
                </a>
                <a href="/dashboard/incidents" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In Progress Alerts</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{totalInProgressAlerts}</p>
                </a>
              </div>
           </section>
          </div> 

            <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Cluster</h3>
            <section id='cluster'>
              <div id='cluster-row-1'className='display: inline-flex'>
                <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=5`} width="325" height="225" frameBorder="0"></iframe>
                <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=6`} width="325" height="225" frameBorder="0"></iframe>
              </div>
              <div id='cluster-row-2' className='display: inline-flex'>
                <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=10`} width="325" height="225" frameBorder="0"></iframe>
                <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=11`} width="325" height="225" frameBorder="0"></iframe>
              </div>
           </section>
         
           <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Nodes</h3>
           <section id='nodes' className='display: inline-flex'>
              <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=24`} width="325" height="225" frameBorder="0"></iframe>
              <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=26`} width="325" height="225" frameBorder="0"></iframe>
           </section>
          </div>
        </div>
    </div>
    );
}


//Ideally switch to dynamic server side rendering.

//Parallel route the node and cluster health sections to load at the same time? https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  //create modal with this technique for cluster connection? https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals

//turn dashboard into layout with side bar, alerts, cluster, and node health components?

//revalidate results from fetching promql queries and alerts? https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data

//using react suspense (see example) for promql visuals @https://nextjs.org/learn/dashboard-app/streaming
//group requests for node and cluster to avoid card popping? @https://nextjs.org/learn/dashboard-app/streaming#grouping-components

//review optimizations when done: https://nextjs.org/docs/app/building-your-application/optimizing
//testing with JEST: https://nextjs.org/docs/app/building-your-application/testing/jest