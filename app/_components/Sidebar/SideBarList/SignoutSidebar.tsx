import { signOut } from "next-auth/react";
import Link from "next/link";

export default function SignoutSideBar() {
  return (
    <>
      <Link
        href=""
        onClick={() => signOut()}
        className="flex items-center p-2 px-12 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
      </Link>
    </>
  );
}
