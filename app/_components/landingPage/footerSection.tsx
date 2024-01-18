import Link from "next/link";
import Image from "next/image";
export default function Footer() {

    return (
      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                className="h-10 me-5 sm:h-10"
                alt="NotiKube Logo"
                height={200}
                width={200}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                NotiKube
              </span>
            </Link>
          </div>
          <div className="grid justify-end gap-8 sm:gap-6 sm:grid-cols">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://github.com/oslabs-beta/NotiKube"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/notikube/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
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
          <div className="flex mt-4 justify-center space-x-6 sm:justify-center sm:mt-0">
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
                alt="GitHub Logo"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    )
}