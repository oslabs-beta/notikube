import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="md:mb-0 mb-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo.svg"
                  className="h-10 mr-6 sm:h-10"
                  alt="NotiKube Logo"
                  height={20}
                  width={20}
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  NotiKube
                </span>
              </Link>
            </div>
            <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div className="md:col-span-2">
                {" "}
                {/* Adjust column span for wider desktop view */}
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/oslabs-beta/NotiKube"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/notikube/"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                NotiKube™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:mt-0">
              {/* Github Logo */}
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <Image
                  src="/landingPage/footerSection/github.svg"
                  alt="GitHub Logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/notikube/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <Image
                  src="/landingPage/footerSection/linkedin.svg"
                  alt="LinkedIn Logo"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
