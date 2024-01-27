import React, {useState} from 'react'
import { Accordion } from 'flowbite-react'
import { SnapshotDataDefinition } from '../../../../types/definitions'
import {CpuOrMemoryCircle, NodesAndPodsMetrics} from './VisualizingMetrics'

const SnapshotData = (props) => {
    const metrics = props.data
    const clusterMemoryUsage = Math.round(parseInt(metrics.cluster_memory_usage))
    const clusterCpuUsage = Math.round(parseInt(metrics.cluster_cpu_usage))
    const readyNodes = parseInt(metrics.ready_nodes)
    const unhealthyNodes = parseInt(metrics.unhealthy_nodes)
    const readyPods = parseInt(metrics.ready_pods)
    const unhealthyPods = parseInt(metrics.unhealthy_pods)
    console.log('data from snapshotData: ', metrics)

    return (
      <div className='pt-5'>

    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Incident Cluster Metrics</Accordion.Title>
        <Accordion.Content>
          <CpuOrMemoryCircle memory={clusterMemoryUsage} cpu={clusterCpuUsage}/>
          <NodesAndPodsMetrics readyNodes={readyNodes} unhealthyNodes={unhealthyNodes} readyPods={readyPods} unhealthyPods={unhealthyPods} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>

    )
    }

export default SnapshotData