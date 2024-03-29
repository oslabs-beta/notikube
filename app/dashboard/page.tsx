
import HomeAlerts from '../_components/homePage/homeAlerts';
import { ClusterHealth, NodeCPUHealth, PodHealth, PodRestartHealth, ClusterCPUMem } from '../_components/homePage/clusterMetrics';
import ClusterDetails from '../_components/homePage/clusterDetails';
import { clusterInfo } from '../lib/homePage/clusterInfo';
import LoadingSpinner from '../_components/homePage/loadingSpinner';
import { Suspense } from 'react'
import type { Metadata } from "next";
import { redirect } from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Tab, TabList, TabGroup, TabPanel, TabPanels, Divider } from "@tremor/react";
import React from 'react';

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

          {/* Header */}
          <h1 className="text-left text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <Suspense fallback={<LoadingSpinner />}>
            <ClusterDetails cluster_name={cluster_name} cluster_ip={cluster_ip} />
          </Suspense>
          <div>

            {/* Alerts */}
            <Divider>Alerts</Divider>
            <Suspense fallback={<LoadingSpinner />}>
              <HomeAlerts cluster_ip={cluster_ip} />
            </Suspense>

            {/* Metrics */}
            <Divider>Metrics</Divider>
            <TabGroup className="pl-8 my-4">
            <div className="mb-4">
              <TabList color="red" variant="solid">
                <Tab data-cy='node-cpu-tab'>Node CPU</Tab>
                <Tab data-cy='cluster-cpu-tab'>Cluster CPU/Mem</Tab>
                <Tab data-cy='pod-name-tab'>Pod By NameSpace</Tab>
                <Tab data-cy='pod-restart-tab'>Pod Restarts</Tab>
                <Tab data-cy='cluster-summary-tab'>Cluster Summary</Tab>
              </TabList>
            </div>
              <TabPanels >
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <NodeCPUHealth cluster_ip={cluster_ip} />
                  </Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<LoadingSpinner />}>
                    <ClusterCPUMem cluster_ip={cluster_ip} />
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
