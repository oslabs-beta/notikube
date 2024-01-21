import { Card, Text, Metric, Title, BarChart, Subtitle} from "@tremor/react";
import { 
  numOfReadyNodes,
  numByNamePods,
  numOfUnhealthyNodes,
  restartByNamePods,
  cpuUtilByNode,
  numOfReadyPods,
  numOfUnhealthyPods,
} from "../../lib/queries";
import { NameSpacePods, CircleNode } from "../../lib/definitions";
import NodeCircle from "./nodeCircle";

export async function NodeCPUHealth({ cluster_ip }: {cluster_ip: string}) {
  const cpuUtilByNodeResult = await cpuUtilByNode(cluster_ip);
  const nodeCircles = cpuUtilByNodeResult.map((n: CircleNode) => {return <NodeCircle key={n.metric.nodename} name={n.metric.nodename} value={Number(n.value[1])}/>})

  return (
    <div>
      <Title className="text-center">CPU Utilization By Node</Title>
      <div id='NodeCPUHealth-row-1'className='display: inline-flex pl-8 py-1'>
        {nodeCircles}
      </div>
    </div>
  )
}

export async function PodHealth({ cluster_ip }: {cluster_ip: string}) {
  const numByNamePodsResult = await numByNamePods(cluster_ip);
  const chartData1 = numByNamePodsResult.map((n: NameSpacePods) => {return {name: n.metric.namespace, 'Number of Pods': Number(n.value[1])} })

  return (
    <div id='PodHealth-row-1'className='display: block p-6'>
      <Card>
        <Title>Number of Pods</Title>
        <Subtitle>By Namespace</Subtitle>
        <BarChart
          className="mt-6 "
          data={chartData1}
          index="name"
          categories={["Number of Pods"]}
          colors={["red"]}
          yAxisWidth={48}
          showAnimation={true}
        />
      </Card>
    </div>
  )
}

export async function PodRestartHealth({ cluster_ip }: {cluster_ip: string}) {
  const restartByNamePodsResult = await restartByNamePods(cluster_ip);
  const chartData2 = restartByNamePodsResult.map((n: NameSpacePods) => {return {name: n.metric.namespace, 'Number of Restarted Pods': Number(n.value[1])} })
 
  return (
    <div id='podRestartHealth-row-1'className='display: block p-6'>
      <Card>
        <Title>Number of restarted pods per namespace</Title>
        <Subtitle>By Namepace ~ 5 Minutes</Subtitle>
        <BarChart
          className="mt-6"
          data={chartData2}
          index="name"
          categories={["Number of Restarted Pods"]}
          colors={["red"]}
          yAxisWidth={48}
          showAnimation={true}
        />
      </Card>
    </div>
  )
}

export async function ClusterHealth({ cluster_ip }: {cluster_ip: string}) {

  const numOfReadyNodesResult = await numOfReadyNodes(cluster_ip);
  const numOfUnhealthyNodesResult = await numOfUnhealthyNodes(cluster_ip);
  const numOfReadyPodsResult = await numOfReadyPods(cluster_ip);
  const numOfUnhealthyPodsResult = await numOfUnhealthyPods(cluster_ip);

    return (
      <div>
        <section id='nodes' className='display: inline-flex pl-8 py-4 space-x-5'>
          <Card className="max-w-lg mx-auto" decoration="top" decorationColor="red">
            <Text>Ready Nodes</Text>
            <Metric>{numOfReadyNodesResult}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text>Unavailable Nodes</Text>
            <Metric>{numOfUnhealthyNodesResult}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text>Ready Pods</Text>
            <Metric>{numOfReadyPodsResult}</Metric>
          </Card>
          <Card className="max-w-lg  mx-auto" decoration="top" decorationColor="red">
            <Text>Unavailable Pods</Text>
            <Metric>{numOfUnhealthyPodsResult}</Metric>
          </Card>
        </section>
      </div>
    )
}

//revalidate results from fetching promql queries and alerts? https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data
       
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/    