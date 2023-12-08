import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
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
          <Link to="" className="flex items-center ps-10 mb-5">
            <img
              src="src/assets/logo.svg"
              className="h-10 me-5 sm:h-10"
              alt="NotiKube Logo"
            />
            <span className="self-center text-xl font whitespace-nowrap dark:text-white">
              NotiKube
            </span>
          </Link>

          {/* List of Pages */}
          <ul className="space-y-2">
            {/* Dashboard Link */}
            <li>
              <NavLink
                to="/dashboard"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "var(--theme-color-NotikubeRed)" : isPending ? "red" : "black",
                    transition: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.54 2H7.92C9.33 2 10.46 3.15 10.46 4.561V7.97C10.46 9.39 9.33 10.53 7.92 10.53H4.54C3.14 10.53 2 9.39 2 7.97V4.561C2 3.15 3.14 2 4.54 2ZM4.54 13.4697H7.92C9.33 13.4697 10.46 14.6107 10.46 16.0307V19.4397C10.46 20.8497 9.33 21.9997 7.92 21.9997H4.54C3.14 21.9997 2 20.8497 2 19.4397V16.0307C2 14.6107 3.14 13.4697 4.54 13.4697ZM19.4601 2H16.0801C14.6701 2 13.5401 3.15 13.5401 4.561V7.97C13.5401 9.39 14.6701 10.53 16.0801 10.53H19.4601C20.8601 10.53 22.0001 9.39 22.0001 7.97V4.561C22.0001 3.15 20.8601 2 19.4601 2ZM16.0801 13.4697H19.4601C20.8601 13.4697 22.0001 14.6107 22.0001 16.0307V19.4397C22.0001 20.8497 20.8601 21.9997 19.4601 21.9997H16.0801C14.6701 21.9997 13.5401 20.8497 13.5401 19.4397V16.0307C13.5401 14.6107 14.6701 13.4697 16.0801 13.4697Z"
                      fill="#030229"
                    />
                  </g>
                </svg>
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>

            {/* Incident Link */}
            <li>
              <NavLink
                to="/alerts"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 4.5C17 3.12033 18.1203 2 19.5 2C20.8797 2 22 3.12033 22 4.5C22 5.87967 20.8797 7 19.5 7C18.1203 7 17 5.87967 17 4.5ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z"
                      fill="#030229"
                    />
                  </g>
                </svg>
                <span className="ml-3">Incidents</span>
              </NavLink>
            </li>

            {/* Connect Cluster Link */}
            <li>
              <NavLink
                to="/connect-cluster"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.33 2.00037H16.669C20.07 2.00037 21.99 3.92937 22 7.33037V16.6704C22 20.0704 20.07 22.0004 16.669 22.0004H7.33C3.929 22.0004 2 20.0704 2 16.6704V7.33037C2 3.92937 3.929 2.00037 7.33 2.00037ZM12.049 17.8604C12.48 17.8604 12.839 17.5404 12.879 17.1104V6.92037C12.919 6.61037 12.77 6.29937 12.5 6.13037C12.219 5.96037 11.879 5.96037 11.61 6.13037C11.339 6.29937 11.19 6.61037 11.219 6.92037V17.1104C11.27 17.5404 11.629 17.8604 12.049 17.8604ZM16.65 17.8604C17.07 17.8604 17.429 17.5404 17.48 17.1104V13.8304C17.509 13.5094 17.36 13.2104 17.089 13.0404C16.82 12.8704 16.48 12.8704 16.2 13.0404C15.929 13.2104 15.78 13.5094 15.82 13.8304V17.1104C15.86 17.5404 16.219 17.8604 16.65 17.8604ZM8.219 17.1104C8.179 17.5404 7.82 17.8604 7.389 17.8604C6.959 17.8604 6.599 17.5404 6.56 17.1104V10.2004C6.53 9.88937 6.679 9.58037 6.95 9.41037C7.219 9.24037 7.56 9.24037 7.83 9.41037C8.099 9.58037 8.25 9.88937 8.219 10.2004V17.1104Z"
                      fill="#030229"
                    />
                  </g>
                </svg>
                <span className="ml-3">Connect Cluster</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Setting Icon at Bottom */}
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <NavLink
            to="/profile"
            data-tooltip-target="tooltip-settings"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
          >
            Settings page
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </aside>
    </div>
  );
}
