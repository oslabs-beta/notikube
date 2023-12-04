import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import '../App.css';

function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
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
        <Sidebar/>
        <h1>Hello {name}, This is Notikube.</h1>
        <button onClick={logout}>LogOut</button>
      </div>
    );
  // }
  // else {
  //   return;
  // }
}

export default Dashboard;
