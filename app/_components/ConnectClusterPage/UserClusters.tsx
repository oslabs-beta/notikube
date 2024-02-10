"use client"

import { useEffect, useState } from "react";
import EditCluster from "../../_components/ConnectClusterPage/EditCluster";

export default function UserClusters(props: { owner?: string; clusterName: string; clusterIp: string; edit: string }) {


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
              User Permissions
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
              {props.clusterName}
            </th>
            <td className="px-5 py-8">{props.clusterIp}</td>
            <td className="px-10 py-5 text-right font-semibold text-gray-900">{props.owner}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
