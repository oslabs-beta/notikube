import Link from "next/link";
import Image from "next/image";

export default function NotiKubeLogo() {
  return (
    <div className="py-5">
      <Link href="/dashboard" className="flex items-center ps-10 mb-5">
        <Image
          src="/assets/logo.svg"
          className="h-10 me-5 sm:h-10"
          alt="NotiKube Logo"
          width={20}
          height={20}
        />
        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
          NotiKube
        </span>
      </Link>
    </div>
  );
}
