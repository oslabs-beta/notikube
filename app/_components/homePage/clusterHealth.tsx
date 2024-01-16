
export function ClusterHealth() {
  return (
    <div>
      
        <section id='cluster'>
          <div id='cluster-row-1'className='display: inline-flex'>
            <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=5`} width="325" height="225" frameBorder="0"></iframe>
            <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=6`} width="325" height="225" frameBorder="0"></iframe>
          </div>
          <div id='cluster-row-2' className='display: inline-flex'>
            <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=10`} width="325" height="225" frameBorder="0"></iframe>
            <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=11`} width="325" height="225" frameBorder="0"></iframe>
          </div>
        </section>
    </div>
  )
}

export function NodeHealth() {
    return (
      <div>
        
        <section id='nodes' className='display: inline-flex'>
          <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=24`} width="325" height="225" frameBorder="0"></iframe>
          <iframe className="rounded-lg m-3" src={`http:///*ipAddress*//d-solo/garysdevil-kube-state-metrics-v2/kube-state-metrics-v2?orgId=1&from=${Date.now() - 3600000}&to=${Date.now()}&panelId=26`} width="325" height="225" frameBorder="0"></iframe>
        </section>
      </div>
    )
}

//revalidate results from fetching promql queries and alerts? https://nextjs.org/docs/app/building-your-application/routing/route-handlers#revalidating-cached-data
       
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/    