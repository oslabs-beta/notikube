"use client";

import NotiKubeLogo from "./SideBarList/NotiKubeLogo";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <>
      {/* Main HTML tag where Sidebar component is */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* Top Section of Sidebar component */}
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* NotiKube logo component and NavLinks */}
          <NotiKubeLogo />
          <NavLinks />
        </div>
      </aside>
    </>
  );
}
