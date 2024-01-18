'use client';

// import { Link } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotiKubeLogo from "./SideBarList/notikube-logo";
import NavLinks from "./nav-links";

export default function Sidebar() {

  const pathname = usePathname(); 

  return (
    <div>
      {/* Main HTML tag where Sidebar component is */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        {/* Top Section of Sidebar component */}
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* This link component contains the NotiKube link and logo */}
         <NotiKubeLogo />
          <NavLinks />
        </div>
      </aside>
    </div>
  );
}
