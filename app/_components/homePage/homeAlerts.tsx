import React from 'react';
import Link from 'next/link'
import { numProgressAlerts, numTotalAlerts, numCriticalAlerts, numOpenAlerts } from '../../lib/homePage/numOfAlerts';

export default async function homeAlerts({ cluster_ip }: { cluster_ip: string }) {
  const totalAlerts = await numTotalAlerts(cluster_ip);
  const totalOpenAlerts = await numOpenAlerts(cluster_ip);
  const totalInProgressAlerts = await numProgressAlerts(cluster_ip);
  const totalCriticalAlerts = await numCriticalAlerts(cluster_ip);

  return (
    <div id='metrics' className=''>
      <section className="">
        <div id='dashboard-alerts' className='flex justify-center'>
          <Link href="/dashboard/incidents" className="block m-2 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Alerts</h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">{totalAlerts}</p>
          </Link>
          <Link href="/dashboard/incidents" className="block m-2 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Alerts</h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">{totalOpenAlerts}</p>
          </Link>
          <Link href="/dashboard/incidents" className="block m-2 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In Progress Alerts</h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">{totalInProgressAlerts}</p>
          </Link>
          <Link href="/dashboard/incidents" className="block m-2 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Critical Alerts</h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">{totalCriticalAlerts}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}


