import { clusterInfo } from "../../lib/homePage/clusterInfo";

export default async function clusterDetails({ userid } : {userid: string}) {
    //Grab user name from authentication
    const { clusterName, clusterIp } = await clusterInfo(userid);
  return (
    <div>
      <h2 className="pl-8 py-1 ">{clusterName}</h2>
      <h2 className="pl-8 py-1 ">Cluster IP Address: {clusterIp}</h2>
    </div>
  )
}
