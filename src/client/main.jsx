import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Signup from './views/Signup.jsx';
import Login from './views/Login.jsx';
import Dashboard from './views/Dashboard.jsx';
import Profile from './views/Profile.jsx';
import Alerts from './components/Alerts.jsx';
import ConnectCluster from './views/ConnectCluster.jsx';

import './App.css';

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
    path: '/connect-cluster',
    element: <ConnectCluster />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/alerts',
    element: <Alerts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
