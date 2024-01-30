"use client";

import React, { useState, useEffect } from "react";
import {useRouter, redirect} from 'next/navigation';
import { useSession } from 'next-auth/react';
// UserClusters is the table component that populates the associated cluster with the user
import UserClusters from "../../_components/ConnectClusterPage/UserClusters";
// ConnectClusterModal is the popup modal that appears when you press 'Add New Cluster'
import ConnectClusterModal from "../../_components/ConnectClusterPage/ConnectClusterModal";
import { User } from '../../../types/definitions';
import EditCluster from '../../_components/ConnectClusterPage/EditCluster'

export default function ConnectCluster() {

  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [clusterIp, setClusterIp] = useState("")
  const [clusterName, setClusterName] = useState("")
  const [userRole, setUserRole] = useState<string>()
  const [edit, setEdit] = useState<string>('false')

  // FETCH REQUEST TO GRAB CLUSTER ASSOCIATED WITH USER
  async function getClusters() {
    try {
      const response = await fetch("/api/get-cluster");
      if (!response.ok) {
        throw new Error("Failed to fetch clusters");
      }
      const data = await response.json();
      setClusterName(data.cluster_name)
      setClusterIp(data.cluster_ip)
    } catch (err) {
      console.log("Error fetching user's cluster", err);
    }
  }

  // grab user_id from session token
  const session = useSession().data;
  const userId = session?.user?.userid;

  // fetch user data and set it in state
  async function fetchUser(userId: (string | undefined)) {
    if (userId !== undefined) {
      let res = await fetch(`/api/getUser/${userId}`)
      const data: User = await res.json();
      setUserData(data);
      setLoading(false);
    }
  }

  // get cluster data and user role
  useEffect(() => {
    if (userId != undefined) {
      getClusters();
      fetchUser(userId)
      if (userData?.cluster_owner === true) {
        setUserRole('Owner');
      } else if (userData?.cluster_owner === false) {
        setUserRole('Member')
      } else {
        setUserRole('')
      }
    }}, [userId, userData?.cluster_owner])


  // function to toggleModal with a warning message (if user with existing cluster clicks add cluster)
  const initiateAdd = () => {
    if (confirm('Adding a new cluster will remove the existing cluster. All cluster members will lose access to the existing cluster and must be added to the new cluster.')) {
    setModalVisible(!isModalVisible);
    }
  };

  // function to toggleModal without warning message (if user doesn't have existing cluster)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // function to switch between edit component and display component
  const changeEdit = () => {
    if (edit === 'true') {
      setEdit('false')
    } else {
      setEdit('true')
    } 
  };

  // function to update the state of cluster details when they're edited
  const changeCluster = (name: string, ip: string) => {
    setClusterName(name);
    setClusterIp(ip);
  }

  // function to handle the delete cluster button
  const deleteCluster = () => {
    if (confirm('Deleting this cluster will remove all previous cluster incidents and all members will lose access to the cluster. Are you sure you want to delete this cluster?')) {
    fetch(`http://localhost:3000/api/updateCluster/delete/${userData?.cluster_id}`)
    let newUserData = JSON.parse(JSON.stringify(userData))
    newUserData.cluster_id = null;
    setUserData(newUserData)
  }
}

  const removeCluster = () => {
    console.log('remove cluster')
    if (confirm('Removing this cluster will revoke your access to all cluster incidents and details. To regain access to incidents and cluster details, you must be invited to rejoin the cluster by the cluster owner. Are you sure you want to remove this cluster?')) {
      fetch(`http://localhost:3000/api/updateUser/removeCluster/${userId}`)
      alert('Cluster removed')
      window.location.reload();
    }
  }

  while (loading) {
    return <div>loading ...</div>
  }

// if the user is not associated with a cluster, render instructions and the add cluster form
  if (userData?.cluster_id === null) {
    
    return (
      <div className="grid place-content-center">
        <h1 className="text-left py-5 text-2xl font-bold dark:text-white mt-24">
            Add cluster details to start using NotiKube:
          </h1>
          {isModalVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-50"></div>
        )}
  
        {/* Modal That Appears When you Click + Add New Cluster */}
        <ConnectClusterModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
          <button
            id="defaultModalButton"
            onClick={toggleModal}
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            + Add New Cluster
          </button>
        </div>
    )

  // if the user is an owner, and they haven't clicked the edit button, render cluster details with edit fucntionality
  } else if (userRole === 'Owner' && edit === 'false') {

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-left py-5 text-5xl font-extrabold dark:text-white">
          Your Cluster
        </h1>
        <button
          id="defaultModalButton"
          onClick={initiateAdd}
          className="text-black bg-slate-200 border-black hover:border-black hover:bg-slate-500 hover:text-white focus:ring-white focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 mt-4 w-44 shadow-lg"
          type="button"
        >
          + Add New Cluster
        </button>
      </div>
      <br></br>
      <br></br>

      {/* If the Modal is Visible, grey out the background */}
      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-50"></div>
      )}

      {/* Modal That Appears When you Click + Add New Cluster */}
      <ConnectClusterModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />

      {/* Table for Clusters associated with Users */}
      <UserClusters clusterName={clusterName} clusterIp={clusterIp} owner={userRole} edit={edit}/>
      <br></br>
      <div className="flex justify-between">
      <button 
          className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-36 h-12 mt-6" onClick={changeEdit}>
          Edit Cluster
          </button>
          </div>
      <button
          id="defaultModalButton"
          onClick={deleteCluster}
          className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-36 h-12 mt-4"
          type="button">
          Delete Cluster
      </button>
    </div>
  );

// if the user is an owner and they have clicked edit, render the edit form
} else if (userRole === 'Owner' && edit) {

  return (
    <div>
      <div className="flex justify-between w-1/2">
      <h1 className="text-left py-5 text-5xl font-extrabold dark:text-white">
          Your Cluster
      </h1>
      </div>
      <EditCluster clusterName={clusterName} clusterIp={clusterIp} cluster_id={userData?.cluster_id} change_cluster={changeCluster} change_edit={changeEdit}/>
      <button
          id="defaultModalButton"
          onClick={changeEdit}
          className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-36 h-12 mt-4"
          type="button">
          Cancel
      </button>
    </div>
  )

// if the user is a member, render the cluster details with no edit buttons
} else if (userRole === 'Member') {
  return (

    <div>
      <h1 className="text-left py-5 text-5xl font-extrabold dark:text-white">
          Your Cluster
        </h1>
      <br></br>
      <UserClusters clusterName={clusterName} clusterIp={clusterIp} owner={userRole} edit={edit}/>
      <div className="inline-flex">
      <h3 className="mt-5">* Cluster members cannot make changes to cluster name or cluster IP. Only owners can edit cluster details. To be removed from this cluster <span className='mt-5 text-red-600' onClick={removeCluster}>click here</span>.</h3>
      <br></br>
      </div>
    </div>

  )
} 

}

