import { Divider } from "@tremor/react";

export default async function clusterDetails({ cluster_name, cluster_ip }: { cluster_name: string, cluster_ip: string }) {

  return (
    <div>
      <div className="flex justify-between">
        <p className="py-2 text-left">{cluster_name}</p>
        <p className="px-8 text-right">Cluster IP Address: {cluster_ip}</p>
      </div>
      <Divider>Alerts</Divider>
    </div>
  )
}
