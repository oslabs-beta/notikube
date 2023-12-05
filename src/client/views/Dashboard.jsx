import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import '../App.css';

function Dashboard() {
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = useState('127.0.0.1:60464');
  const [clusterName, setClusterName] = useState('Test1');
  const [name, setName] = useState('Jesse');
  const [isLoaded, setIsLoaded] = useState(false);
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
      navigate('/');
    }
    else {
      alert('There was a problem with logging out');
    }
  }

  // --LEAVE THIS COMMENTED OUT UNTIL WE ARE READY TO GO LIVE--
  // if (isLoaded) {
    return (
      <div>
      <h1 className="text-5xl font-extrabold dark:text-white">Notikube</h1>
      <h2 className="text-4xl font-bold dark:text-white pt-5">{clusterName}</h2>
      <h2 className="text-4xl font-bold dark:text-white pt-3">Current IP Address: {ipAddress}</h2>
      <div id='metrics'>
        <h3 className="text-3xl font-bold dark:text-white py-3">Cluster</h3>
        <section id='cluster'>
          <div id='cluster-row-1'className='display: inline-flex'>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=4`} width="300" height="200" frameborder="0"></iframe>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=5`} width="300" height="200" frameborder="0"></iframe>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=6`} width="300" height="200" frameborder="0"></iframe>
          </div>
          <div id='cluster-row-2' className='display: inline-flex'>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=9`} width="300" height="200" frameborder="0"></iframe>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=10`} width="300" height="200" frameborder="0"></iframe>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=11`} width="300" height="200" frameborder="0"></iframe>
          </div>
        </section>
        <h3 className="text-3xl font-bold dark:text-white py-3">Nodes</h3>
        <section id='nodes' className='display: inline-flex'>
          <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=24`} width="300" height="200" frameborder="0"></iframe>
          <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=26`} width="300" height="200" frameborder="0"></iframe>
        </section>
      </div>
    </div>
    );
  // }
  // else {
  //   return;
  // }
}

export default Dashboard;
