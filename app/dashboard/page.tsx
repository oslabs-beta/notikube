
import HomeAlerts from '../_components/homePage/homeAlerts';
import { ClusterHealth, NodeCPUHealth, PodHealth, PodRestartHealth } from '../_components/homePage/clusterMetrics';
import ClusterDetails from '../_components/homePage/clusterDetails';
import { clusterInfo } from '../lib/homePage/clusterInfo';
import LoadingSpinner from '../_components/homePage/loadingSpinner';
import { Suspense } from 'react'
import type { Metadata } from "next";
import { redirect } from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Tab, TabList, TabGroup, TabPanel, TabPanels, Divider } from "@tremor/react";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Cluster dashboard current alerts and health visualizations'
}

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  let currentUserID = session?.user.userid === undefined ? null : session.user.userid;

  try {
    const { cluster_name, cluster_ip } = await clusterInfo(currentUserID)
    return (
      <div>
        <div>
          <h1 className="text-left text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <Suspense fallback={<LoadingSpinner />}>
            <ClusterDetails cluster_name={cluster_name} cluster_ip={cluster_ip} />
          </Suspense>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <HomeAlerts cluster_ip={cluster_ip} />
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
                    <NodeCPUHealth cluster_ip={cluster_ip} />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <PodHealth cluster_ip={cluster_ip} />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <PodRestartHealth cluster_ip={cluster_ip} />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <ClusterHealth cluster_ip={cluster_ip} />
                  </Suspense>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    );
  }
  catch (error) {
    console.log('Error fetching user cluster, redirecting to connect cluster:', error);
    redirect('/dashboard/connect-cluster')
  }
}
