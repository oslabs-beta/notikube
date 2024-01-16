import { clusterInfo } from "../../lib/homePage/clusterInfo";

export default async function clusterDetails({ userid } : {userid: number}) {
    //Grab user name from authentication
    const { clustername, clusterip } = await clusterInfo(userid);
  return (
    <div>
      <h2 className="pl-8 py-1 ">{clustername}</h2>
      <h2 className="pl-8 py-1 ">Cluster IP Address: {clusterip}</h2>
    </div>
  )
}
