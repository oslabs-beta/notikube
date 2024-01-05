'use client';

import React, { useState } from 'react';
import Sidebar from '../../_components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

export default function ConnectCluster() {
  // const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // This function takes the passed in form data and sends it to the server
  async function newCluster(e: React.FormEvent) {
    e.preventDefault();
  
    // Get the values from the form fields
    const clusterNameElement = document.getElementById('clusterName') as HTMLInputElement | null;
    const clusterIPElement = document.getElementById('clusterIP') as HTMLInputElement | null;
  
    if (clusterNameElement && clusterIPElement) {
      const clusterName = clusterNameElement.value;
      const clusterIP = clusterIPElement.value;
  
      // Prepare the data to be sent
      const data = {
        clusterName,
        clusterIP,
      };
  
      try {
        await fetch('/api/newClusterConnection', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('Data sent successfully');
        // navigate('/dashboard', {newIpAddress: clusterIP, newClusterName: clusterName });
      } catch (error) {
        console.error('Error sending data:', error);
      }
  
      // Close the modal after form submission
      toggleModal();
    } else {
      console.error('Cluster name or IP element is null.');
    }
  }
  
  return (
    <div>
      <Sidebar />
      <div className="p4 flex justify-between">
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
        <div className="ClusterTable text-left">
          {/* Modal toggle */}

          {/* Main modal */}
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className={`${
              isModalVisible ? 'fixed' : 'hidden'
            } overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* Modal header */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Connect a Cluster
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path> 
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <form onSubmit={newCluster}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="clusterName"
                        className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                      >
                        Cluster Name
                      </label>
                      <textarea
                        id="clusterName"
                        rows={1}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write Cluster Name Here"
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="clusterIP"
                        className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                      >
                        IP Address
                      </label>
                      <textarea
                        id="clusterIP"
                        rows={1}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write IP Address Here"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
