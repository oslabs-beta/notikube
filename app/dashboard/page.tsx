
import type { Metadata } from 'next';
import Metrics from "../_components/homePage/metrics";
import { clusterInfo } from '../lib/homePage/clusterInfo';


//import '../globals.css'

//Can you add metadata for specific pages?
// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Cluster dashboard current alerts and health visualizations'
// }

//ADD APIRAM'S AUTH CODE

export default async function Dashboard() {
  //Grab user name from authentication
  const { clustername, clusterip } = await clusterInfo();

    return (
      <div>
        <div className='p-4 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <h2 className="">{clustername}</h2>
          <h2 className="">Cluster IP Address: {clusterip}</h2>
          <div>

          <Metrics/>

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
//Generate search params for cluster ID to SSR content?
//Parallel route the node and cluster health sections to load at the same time? https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  //create modal with this technique for cluster connection? https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals
//add streaming/suspense to cluster node health while slow data loads?
  //wrap all alerts and open alerts into seperate client components and import them here?
//turn dashboard into layout with side bar, alerts, cluster, and node health components?
//revalidate cached data from fetching promql queries and alerts? https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data
//use react cache hook when making requests to DB? https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-third-party-libraries

//review optimizations when done: https://nextjs.org/docs/app/building-your-application/optimizing
//testing with JEST: https://nextjs.org/docs/app/building-your-application/testing/jest