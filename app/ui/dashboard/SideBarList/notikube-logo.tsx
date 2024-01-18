import Link from "next/link"

export default function NotiKubeLogo() {

    return (
        <div>
            <Link href="/" className="flex items-center ps-10 mb-5">
            <img
              src="/assets/logo.svg"
              className="h-10 me-5 sm:h-10"
              alt="NotiKube Logo"
            />
            <span className="self-center text-xl font whitespace-nowrap dark:text-white">
              NotiKube
            </span>
          </Link>
        </div>
    )
}