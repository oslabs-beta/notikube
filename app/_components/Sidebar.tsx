"use client";

// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

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
          <Link href="/" className="flex items-center ps-10 mb-5">
            <Image
              src="/logo.svg"
              className="h-10 me-5 sm:h-10"
              alt="NotiKube Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-xl font whitespace-nowrap dark:text-white">
              NotiKube
            </span>
          </Link>

          {/* List of Pages */}
          <ul className="space-y-2">
            {/* Dashboard Link */}
            <li>
              <Link
                href="/dashboard"
                className={
                  pathname === "/dashboard"
                    ? "font-semibold"
                    : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }
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
              </Link>
            </li>

            {/* Incident Link */}
            <li>
              <Link
                href="/alerts"
                className={
                  pathname === "/alerts"
                    ? "font-semibold"
                    : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }
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
                <span className="ml-3">Alerts</span>
              </Link>
            </li>

            {/* Connect Cluster Link */}
            <li>
              <Link
                href="/connectCluster"
                className={
                  pathname === "/connectCluster"
                    ? "font-semibold"
                    : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }
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
              </Link>
            </li>

            {/* Profile Link */}
            <li>
              <Link
                href="/profile"
                className={
                  pathname === "/profile"
                    ? "font-semibold"
                    : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }
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
                      d="M20.4023 13.58C20.76 13.77 21.036 14.07 21.2301 14.37C21.6083 14.99 21.5776 15.75 21.2097 16.42L20.4943 17.62C20.1162 18.26 19.411 18.66 18.6855 18.66C18.3278 18.66 17.9292 18.56 17.6022 18.36C17.3365 18.19 17.0299 18.13 16.7029 18.13C15.6911 18.13 14.8429 18.96 14.8122 19.95C14.8122 21.1 13.872 22 12.6968 22H11.3069C10.1215 22 9.18125 21.1 9.18125 19.95C9.16081 18.96 8.31259 18.13 7.30085 18.13C6.96361 18.13 6.65702 18.19 6.40153 18.36C6.0745 18.56 5.66572 18.66 5.31825 18.66C4.58245 18.66 3.87729 18.26 3.49917 17.62L2.79402 16.42C2.4159 15.77 2.39546 14.99 2.77358 14.37C2.93709 14.07 3.24368 13.77 3.59115 13.58C3.87729 13.44 4.06125 13.21 4.23498 12.94C4.74596 12.08 4.43937 10.95 3.57071 10.44C2.55897 9.87 2.23194 8.6 2.81446 7.61L3.49917 6.43C4.09191 5.44 5.35913 5.09 6.38109 5.67C7.27019 6.15 8.425 5.83 8.9462 4.98C9.10972 4.7 9.20169 4.4 9.18125 4.1C9.16081 3.71 9.27323 3.34 9.4674 3.04C9.84553 2.42 10.5302 2.02 11.2763 2H12.7172C13.4735 2 14.1582 2.42 14.5363 3.04C14.7203 3.34 14.8429 3.71 14.8122 4.1C14.7918 4.4 14.8838 4.7 15.0473 4.98C15.5685 5.83 16.7233 6.15 17.6226 5.67C18.6344 5.09 19.9118 5.44 20.4943 6.43L21.179 7.61C21.7718 8.6 21.4447 9.87 20.4228 10.44C19.5541 10.95 19.2475 12.08 19.7687 12.94C19.9322 13.21 20.1162 13.44 20.4023 13.58ZM9.10972 12.01C9.10972 13.58 10.4076 14.83 12.0121 14.83C13.6165 14.83 14.8838 13.58 14.8838 12.01C14.8838 10.44 13.6165 9.18 12.0121 9.18C10.4076 9.18 9.10972 10.44 9.10972 12.01Z"
                      fill="#030229"
                    />
                  </g>
                </svg>
                <span className="ml-3">Profile</span>
              </Link>
            </li>

            {/* Sign Out Link */}
            <li>
              <p
                onClick={() => signOut()}
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
                      d="M9.5989 11.23C9.17783 11.23 8.84489 11.57 8.84489 12C8.84489 12.42 9.17783 12.77 9.5989 12.77H15.4743V17.55C15.4743 20 13.5257 22 11.1167 22H6.34782C3.94869 22 2 20.01 2 17.56V6.45C2 3.99 3.95848 2 6.35762 2H11.1363C13.5257 2 15.4743 3.99 15.4743 6.44V11.23H9.5989ZM18.9686 8.54019L21.779 11.4502C21.9234 11.6002 22.0004 11.7902 22.0004 12.0002C22.0004 12.2002 21.9234 12.4002 21.779 12.5402L18.9686 15.4502C18.8243 15.6002 18.6318 15.6802 18.4489 15.6802C18.2564 15.6802 18.0639 15.6002 17.9196 15.4502C17.6308 15.1502 17.6308 14.6602 17.9196 14.3602L19.4595 12.7702H15.4749V11.2302H19.4595L17.9196 9.64019C17.6308 9.34019 17.6308 8.85019 17.9196 8.55019C18.2083 8.24019 18.6799 8.24019 18.9686 8.54019Z"
                      fill="#030229"
                    />
                  </g>
                </svg>
                <span className="ml-3">Sign Out</span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
