"use client"

import { useEffect, useState } from "react";

export default function UserClusters() {

  const [clusterIp, setClusterIp] = useState("")
  const [clusterName, setClusterName] = useState("")

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

  useEffect(() => {
    getClusters()
  }, [])

  return (
    <div className="w-full overflow-x-auto shadow-lg sm:rounded-lg">
      <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-10 py-3">
              Cluster Name
            </th>
            <th scope="col" className="px-5 py-3">
              Cluster IP
            </th>
            <th scope="col" className="px-10 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body Rendered with Users Corresponding Clusters */}
        <tbody>
          <tr className="text-mdodd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-10 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {clusterName}
            </th>
            <td className="px-5 py-8">{clusterIp}</td>
            <td className="px-10 py-5 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
