import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidemenu from './components/Sidemenu';

import '../client/App.css';

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
      else {
        navigate('/');
      }
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

  if (isLoaded) {
    return (
      <div>
        <Sidemenu/>
        <h1>Hello {name}, This is Notikube</h1>
        <button onClick={logout}>LogOut</button>
      </div>
    );
  }
  else {
    return;
  }
}

export default Dashboard;
