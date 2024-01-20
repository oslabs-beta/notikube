import { Card, Text, Metric, Title, BarChart, Subtitle} from "@tremor/react";
import { 
  numOfReadyNodes,
  numByNamePods,
  numOfUnhealthyNodes,
  restartByNamePods,
} from "../../lib/queries";
import { NameSpacePods } from "../../lib/definitions";

export async function ClusterHealth() {

  const numByNamePodsResult = await numByNamePods();
  const restartByNamePodsResult = await restartByNamePods();

  const chartData1 = numByNamePodsResult.map((n: NameSpacePods) => {return {name: n.metric.namespace, 'Number of Pods': Number(n.value[1])} })
  const chartData2 = restartByNamePodsResult.map((n: NameSpacePods) => {return {name: n.metric.namespace, 'Number of Restarted Pods': Number(n.value[1])} })

  return (
    <div>
        <section id='cluster'>

          <div id='cluster-row-2'className='display: inline-flex pl-8 py-1'>
            <Card>
              <Title>Number of Pods</Title>
              <Subtitle>By Namespace</Subtitle>
              <BarChart
                className="mt-6"
                data={chartData1}
                index="name"
                categories={["Number of Pods"]}
                colors={["red"]}
                yAxisWidth={48}
                showAnimation={true}
              />
            </Card>
          </div>
          <div id='cluster-row-2'className='display: inline-flex pl-8 py-3'>
            <Card>
              <Title>Number of restarted pods per namespace</Title>
              <Subtitle>By Namepace - Five Minutes</Subtitle>
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
        </section>
    </div>
  )
}

export async function NodeHealth() {

  const numOfReadyNodesResult = await numOfReadyNodes();
  const numOfUnhealthyNodesResult = await numOfUnhealthyNodes();

    return (
      <div>
        <section id='nodes' className='display: inline-flex'>
          <Card className="max-w-xs mx-auto">
            <Text>Ready Nodes</Text>
            <Metric>{numOfReadyNodesResult}</Metric>
          </Card>
          <Card className="max-w-xs mx-auto">
            <Text>Unavailable Nodes</Text>
            <Metric>{numOfUnhealthyNodesResult}</Metric>
          </Card>
          <Card className="max-w-xs mx-auto">
            <Text>TBD</Text>
            <Metric></Metric>
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
