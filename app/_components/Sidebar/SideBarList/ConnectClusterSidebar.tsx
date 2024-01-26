import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ConnectClusterSideBar() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard/connect-cluster"
        className={
          pathname === "/dashboard/connect-cluster"
            ? "flex items-center p-2 text-base font-semibold text-NotikubeRed bg-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g opacity="0.4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 10V12.334C5 13.4372 5.82149 14.3677 6.91617 14.5046L10.4541 14.9469L11.405 16.0879C11.8206 16.5866 12.4363 16.875 13.0855 16.875H14.0625C15.2706 16.875 16.25 15.8956 16.25 14.6875V13.75H19.0625C19.5803 13.75 20 13.3303 20 12.8125C20 12.2947 19.5803 11.875 19.0625 11.875H16.25V6.875H19.0625C19.5803 6.875 20 6.45526 20 5.9375C20 5.41974 19.5803 5 19.0625 5H16.25V4.0625C16.25 2.85438 15.2706 1.875 14.0625 1.875H13.0855C12.4363 1.875 11.8206 2.16336 11.405 2.6621L10.4541 3.80313L6.91617 4.24538C5.82149 4.3822 5 5.31278 5 6.41598V8.125H3.125C1.39911 8.125 0 9.52411 0 11.25V17.8125C0 18.3303 0.419733 18.75 0.9375 18.75C1.45526 18.75 1.875 18.3303 1.875 17.8125V11.25C1.875 10.5597 2.43465 10 3.125 10H5Z"
              fill="#1F2328"
            />
          </g>
        </svg>
        <span className="ml-3">Connect Cluster</span>
      </Link>
    </>
  );
}
