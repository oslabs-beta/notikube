"use client";

import React, { useState } from "react";

// UserClusters is the table component that populates the associated cluster with the user
import UserClusters from "../../_components/ConnectClusterPage/UserClusters";
// ConnectClusterModal is the popup modal that appears when you press 'Add New Cluster'
import ConnectClusterModal from "../../_components/ConnectClusterPage/ConnectClusterModal";

export default function ConnectCluster() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between">
        <h1 className="text-left pl-8 py-5 text-5xl font-extrabold dark:text-white">
          Your Clusters
        </h1>
        <button
          id="defaultModalButton"
          onClick={toggleModal}
          className="block text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          + Add New Cluster
        </button>
      </div>

      {/* Modal That Appears When you Click + Add New Cluster */}
      <ConnectClusterModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
      
      {/* Table for Clusters associated with Users */}
      <UserClusters />
    </div>
  );
}
