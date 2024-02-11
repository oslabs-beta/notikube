'use client'

import React from 'react'
import { ProgressCircle, Card } from "@tremor/react";
import { clusterMemoryUsage, clusterCpuUsage10mAvg } from '../../lib/queries';

export default function CPUMemCircle({ cpu, memory }: { cpu: number, memory: number }) {
    
  return (
    <div className="space-y-3 py-5">
    <Card data-cy='cluster-cpu' className="max-w-sm mx-auto flex" decoration="top" decorationColor="red">
        <div>
        <p className="p-4 text-slate-500 text-sm text-center font-mono">Cluster Memory Usage</p>
          <ProgressCircle
            showAnimation={true}
            value={memory}
            radius={60}
            strokeWidth={10}
            color={'red'}
          >
            <span className="text-xs text-gray-700 font-medium">{memory.toFixed(2)}%</span>
          </ProgressCircle>
        </div>

        <div>
        <p className="p-4 text-slate-500 text-sm text-center font-mono">Cluster CPU Usage</p>
          <ProgressCircle
            showAnimation={true}
            value={cpu}
            radius={60}
            strokeWidth={10}
            color={'red'}
          >
            <span className="text-xs text-gray-700 font-medium">{cpu.toFixed(2)}%</span>
          </ProgressCircle>
        </div>
      </Card>
  </div>
    )
}