import DashboardSideBar from "./SideBarList/dashboard";
import AlertsSideBar from "./SideBarList/alerts";
import ConnectClusterSideBar from "./SideBarList/connect-cluster";
import ProfileeSideBar from "./SideBarList/profile";
import SignoutSideBar from "./SideBarList/signout";
export default function NavLinks() {
  return (
    <>
      <ul className="space-y-2">
        <li>
          <DashboardSideBar />
        </li>

        <li>
          <AlertsSideBar />
        </li>

        <li>
          <ConnectClusterSideBar />
        </li>

        <li>
          <ProfileeSideBar />
        </li>

        <li>
          <SignoutSideBar />
        </li>
      </ul>
    </>
  );
}
