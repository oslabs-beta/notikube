import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ConnectClusterSideBar() {

    const pathname = usePathname(); 
    return(
        <>
         <Link
                href="/dashboard/connect"
                className={pathname === "/connectCluster" ? "font-semibold" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
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
        </>
    )
}