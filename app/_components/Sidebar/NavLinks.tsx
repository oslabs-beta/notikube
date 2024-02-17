import DashboardSideBar from "./SideBarList/DashboardSidebar";
import IncidentsSideBar from "./SideBarList/IncidentsSidebar";
import ConnectClusterSideBar from "./SideBarList/ConnectClusterSidebar";
// import ConfigurationsSidebar from "./SideBarList/ConfigurationsSidebar";

export default function NavLinks() {
  return (
    <>
      <ul className="space-y-2">
        <li>
          <DashboardSideBar />
        </li>

        <li>
          <IncidentsSideBar />
        </li>

        <li>
          <ConnectClusterSideBar />
        </li>

        {/* COMMENT BACK IN WHEN DEREK FINISHES CONFIGURATION PAGE */}
        {/* <li>
          <ConfigurationsSidebar />
        </li> */}
      </ul>
    </>
  );
}
