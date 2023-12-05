import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../client/App.css'

function Dashboard() {
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = useState('127.0.0.1:55625');
  const [clusterName, setClusterName] = useState('Test1');
  const [name, setName] = useState('Jesse');
  const [isLoaded, setIsLoaded] = useState(false);
  fetch('/api/auth/checkauth')
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        setName(data.name)
        setIsLoaded(true)
      }
      else {
        navigate('/')
      }
    })

  // async function logout() {
  //   let result = await fetch('/api/auth/logout')
  //   if (result.status == 200) {
  //     navigate('/')
  //   }
  //   else {
  //     alert('There was a problem with logging out')
  //   }
  // }

  if (isLoaded) {
  //<button onClick={logout}>LogOut</button>
    return (
      <div>
        <h1>Hello {name}, This is Notikube</h1>
        <h2>{clusterName}</h2>
        <h3>Current IP Address: {ipAddress}</h3>
        <div id='metrics'>
          <section id='cluster'>
            <div id='cluster-row-1'>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=4`} width="300" height="200" frameborder="0"></iframe>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=5`} width="300" height="200" frameborder="0"></iframe>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=6`} width="300" height="200" frameborder="0"></iframe>
            </div>
            <div id='cluster-row-2'>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=9`} width="300" height="200" frameborder="0"></iframe>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=10`} width="300" height="200" frameborder="0"></iframe>
              <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=11`} width="300" height="200" frameborder="0"></iframe>
            </div>
          </section>
          <section id='nodes'>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=24`} width="300" height="200" frameborder="0"></iframe>
            <iframe src={`http://${ipAddress}/d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=26`} width="300" height="200" frameborder="0"></iframe>
          </section>
        </div>
      </div>
    )
  }
  else {
    return(
      <>
        <h1>Loading...</h1>
      </>
    );
  }
}

export default Dashboard
