import Link from "next/link";
import Image from "next/image";
export default function TitleSection() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mx-auto lg:col-span-7 pr-8">
            {" "}
            {/* Added pr-8 (padding-right) */}
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl lg:text-left xl:text-6xl dark:text-white">
              Incident management for Kubernetes clusters
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-left lg:text-xl dark:text-gray-400">
              Stay on top of critical alerts with NotiKube&apos;s intuitive
              dashboard for complete incident lifecycle management.
            </p>
            <div className="hidden lg:mt-0 lg:flex">
              <Link
                href="/auth/signup"
                className="items-left inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex max-w-2xl">
            <Image
              src="/landingPage/Illustration.svg"
              alt="mockup"
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
