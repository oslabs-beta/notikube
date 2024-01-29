import React from "react";
import { Card, Flex, ProgressCircle, Text, Metric} from '@tremor/react'

function CpuOrMemoryCircle(props: {memory: number, cpu: number}) {
    const {memory, cpu} = props
    return (
<div className="space-y-3">
    <Card className="max-w-sm mx-auto flex" decoration="top" decorationColor="red">
        <div>
        <p className="p-2 text-slate-500 text-sm text-center font-mono">Cluster Memory Usage</p>
          <ProgressCircle
            showAnimation={true}
            value={memory}
            radius={60}
            strokeWidth={10}
            color={'red'}
          >
            <span className="text-xs text-gray-700 font-medium">{memory}%</span>
          </ProgressCircle>
        </div>

        <div>
        <p className="p-2 text-slate-500 text-sm text-center font-mono">Cluster CPU Usage</p>
          <ProgressCircle
            showAnimation={true}
            value={cpu}
            radius={60}
            strokeWidth={10}
            color={'red'}
          >
            <span className="text-xs text-gray-700 font-medium">{cpu}%</span>
          </ProgressCircle>
        </div>
      </Card>
  </div>
  )
}

function NodesAndPodsMetrics(props: {readyNodes: number, unhealthyNodes: number, readyPods: number, unhealthyPods: number}) {
    const {readyNodes, unhealthyNodes, readyPods, unhealthyPods} = props
    return (
        <div className="flex justify-center py-5" >
        <section id='cluster-health' className='display: inline-flex py-4 space-x-5'>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text className="p-2">Ready Nodes</Text>
            <Metric className="p-2">{readyNodes}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text className="p-2">Unavailable Nodes</Text>
            <Metric className="p-2">{unhealthyNodes}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text className="p-2">Ready Pods</Text>
            <Metric className="p-2">{readyPods}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text className="p-2">Unavailable Pods</Text>
            <Metric className="p-2">{unhealthyPods}</Metric>
          </Card>
        </section>
      </div>
    )
}

export {CpuOrMemoryCircle, NodesAndPodsMetrics}
