import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './views/Dashboard.jsx';
import Profile from './components/Profile';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import LandingPage from './views/LandingPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/incident-log',
    // element: <IncidentLog />
  },
  {
    path: '/notifications',
    // element: <Notifications />
  },
  {
    path: '/connect-cluster',
    // element: <ConnectCluster />
  },
  {
    path: '/profile',
    element: <Profile />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
