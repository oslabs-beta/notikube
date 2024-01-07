import React from 'react'
import Link from 'next/link'
import numTotalAlerts from '../../lib/homePage/numTotalAlerts';
import numProgressAlerts from '../../lib/homePage/numProgressAlerts';

export default async function Metrics() {
  const totalAlerts = await numTotalAlerts();
  const totalInProgressAlerts = await numProgressAlerts();
  
  return (
    <div id='metrics'>
        <section>
            <div id='dashboard-alerts'className='my-5 display: inline-flex'>
            <Link href="/dashboard/incidents" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All Open Alerts</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{totalAlerts}</p>
            </Link>
            <Link href="/dashboard/incidents" className="block m-3 max-w-sm w-80 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In Progress Alerts</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{totalInProgressAlerts}</p>
            </Link>
            </div>
        </section>
    </div>
  )
}
