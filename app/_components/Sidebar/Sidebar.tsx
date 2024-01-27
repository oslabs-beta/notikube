"use client";

import NotiKubeLogo from "./SideBarList/NotiKubeLogo";
import NavLinks from "./NavLinks";
import SignoutSideBar from "./SideBarList/SignoutSidebar";
import UserInformationSidebar from "./SideBarList/UserInformationSidebar";

export default function Sidebar() {
  return (
    <>
      {/* Main HTML tag where Sidebar component is */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        {/* Top Section of Sidebar component */}
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* Apply absolute position to child elements */}
          <NotiKubeLogo />

          <NavLinks />
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
          <UserInformationSidebar />
          <div className="hidden absolute bottom-0 left-0 right-1 border-dashed justify-center p-4 space-x-2 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
            <SignoutSideBar />
          </div>
        </div>
      </aside>
    </>
  );
}
