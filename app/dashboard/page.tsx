'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../_components/Sidebar';

import '../globals.css'

function Dashboard() {
  // const router = useRouter();
  const [ipAddress, setIpAddress] = useState('127.0.0.1:56657');
  const [clusterName, setClusterName] = useState('Test1');
  const [name, setName] = useState('Jesse');
  const [numOfAlerts, setNumOfAlerts] = useState(12);
  const [inProgress, setInProgress] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);

  // const newIpAddress = location.newIpAddress;
  // const newClusterName = location.newClusterName;

  // useEffect(() => {
  //   setIpAddress(newIpAddress);
  //   setClusterName(newClusterName);
  // }, [newIpAddress, newClusterName]);

  fetch('/api/auth/checkauth')
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        setName(data.name);
        setIsLoaded(true);
      }
      // --LEAVE THIS COMMENTED OUT UNTIL WE ARE READY TO GO LIVE--
      // else {
      //   navigate('/');
      // }
    });

  async function logout() {
    const result = await fetch('/api/auth/logout');
    if (result.status == 200) {
      // router.push('/');
    }
    else {
      alert('There was a problem with logging out');
    }
  }

  // --LEAVE THIS COMMENTED OUT UNTIL WE ARE READY TO GO LIVE--
  // if (isLoaded) {
    return (
      <div>
        <Sidebar />
        <div className='p-4 sm:ml-64'>
          <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">Dashboard</h1>
          <h2 className="">{clusterName}</h2>
          <h2 className="">Current Grafana IP Address: {ipAddress}</h2>
          <div id='metrics'>
            <section>
              <div id='dashboard-alerts'className='my-5 display: inline-flex'>
                <a href="/alerts" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Open Alerts</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{numOfAlerts}</p>
                </a>
                <a href="/alerts" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In Progress Alerts</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{inProgress}</p>
                </a>
              </div>
            </section>
            <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Cluster</h3>
            <section id='cluster'>
              <div id='cluster-row-1'className='display: inline-flex'>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=5`} width="325" height="225" frameBorder="0"></iframe>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=6`} width="325" height="225" frameBorder="0"></iframe>
              </div>
              <div id='cluster-row-2' className='display: inline-flex'>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=10`} width="325" height="225" frameBorder="0"></iframe>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=11`} width="325" height="225" frameBorder="0"></iframe>
              </div>
           </section>
           <h3 className="text-left pl-8 text-3xl font-bold dark:text-white py-3">Nodes</h3>
              <section id='nodes' className='display: inline-flex'>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=24`} width="325" height="225" frameBorder="0"></iframe>
                <iframe className="rounded-lg m-3" src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=26`} width="325" height="225" frameBorder="0"></iframe>
              </section>
          </div>
        </div>
    </div>
    );
  // }
  // else {
  //   return;
  // }
}

export default Dashboard;