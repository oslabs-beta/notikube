import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSideBar() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard"
        className={
          pathname === "/dashboard"
            ? "flex items-center p-2 text-base font-semibold text-NotikubeRed bg-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
    </>
  );
}
