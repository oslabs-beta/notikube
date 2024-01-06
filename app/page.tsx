import Image from "next/image";
import Link from "next/link";
import TeamMember from "./_components/landingPage/TeamMember";

export default function LandingPage() {
  
  const teamMembers = [
    {
      name: "Jesse Chou",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U05BZ4FFHHV-e6b25299e14c-512",
      githubLink: "https://github.com/jesse-chou/",
      linkedinLink: "https://www.linkedin.com/in/jesse-chou/",
      role: "Software Engineer",
    },
    {
      name: "Derek Coughlan",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U057QU0L9LG-10e0ff54b26c-512",
      githubLink: "https://github.com/derekcoughlan",
      linkedinLink: "https://www.linkedin.com/in/derekcoughlan/",
      role: "Software Engineer",
    },
    {
      name: "Emmanuel Ikhalea",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U05AZ9KR9A9-8ffcc9718ee7-512",
      githubLink: "#",
      linkedinLink: "https://www.linkedin.com/in/emmanuel-ikhalea-222781178/",
      role: "Software Engineer",
    },
    {
      name: "Apiraam Selvabaskaran",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U050F0D9T71-9da884f90254-512",
      githubLink: "https://github.com/apiraam96",
      linkedinLink:
        "https://www.linkedin.com/in/apiraam-selvabaskaran-2427b8162/",
      role: "Software Engineer",
    },
    {
      name: "Dane Smith",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U05C5P6M935-aa90bb8223ce-512",
      githubLink: "https://github.com/dudemandane",
      linkedinLink: "https://www.linkedin.com/in/danealexandersmith/",
      role: "Software Engineer",
    },
  ];

  return (
    <div className='pt-10'>
      {/* Navbar */}
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="NotiKube Logo"
                width={120}
                height={40}
                className="h-10 me-3 sm:h-10"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
                NotiKube
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="/auth/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="text-white bg-NotikubeRed hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* ATF (Above The Fold) Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mx-auto lg:col-span-7 pr-8"> {/* Added pr-8 (padding-right) */}
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl lg:text-left xl:text-6xl dark:text-white">
              Incident management for Kubernetes clusters
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-left lg:text-xl dark:text-gray-400">
              Stay on top of critical alerts with NotiKube&apos;s intuitive dashboard for complete incident lifecycle management.
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

      {/* Core Technologies Section */}
      <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-6 dark:text-white md:text-4xl">
          Core Technologies Used
        </h2>
        <div className="grid grid-cols-4 gap-6 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400 justify-center">
          {[
            { logo: "kubernetes.svg", link: "https://kubernetes.io/" },
            { logo: "docker.svg", link: "https://www.docker.com/" },
            { logo: "prometheus.svg", link: "https://prometheus.io/" },
            { logo: "grafana.svg", link: "https://grafana.com/" },
          ].map((tech, index) => (
            <Link
              key={index}
              href={tech.link}
              className="flex justify-center items-center"
            >
              <Image
                src={`/landingPage/coreTechnologiesSection/${tech.logo}`}
                alt={`${tech.logo.replace(".svg", "")} Logo`}
                width={200}
                height={200}
                className="w-40 h-40"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* First Informational Section - Dashboard View */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                Monitor Your Alerts Alongside Cluster Health
              </h2>
              <p className="mb-4">
                See the most critical incident metrics pulled directly from
                Prometheus Alert Manager
              </p>
              <p>
                Check your clusters health directly from the homepage ensuring
                high availability and constant uptime
              </p>
            </div>
            <div className="grid gap-4 mt-8">
              <Image
                className="w-full rounded-lg"
                src="/landingPage/Dashboard.png"
                width={2000}
                height={2000}
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Informational Section - Incidents View */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:text-left">
          <div className="grid gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src="/landingPage/Incidents.png"
              width={2000}
              height={2000}
              alt="incidents"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Track Your Incidents
            </h2>
            <p className="mb-4">
              View details for each incident through our intuitive dashboard
            </p>
            <p>
              Our application uses the Prometheus API to provide real-time
              alerting and incident management. Track your most critical alerts
              and see what priorities they are
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              NotiKube is a distributed team with engineers from around the world
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Medium Article Section */}
      <section className="bg-white dark:bg-gray-900 flex items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Managing Incidents for Modern Day DevOps Teams
            </h2>
            <p className="mb-4 font-light">
              NotiKube is a lightweight incident management tool that utilizes
              Prometheus Alert Manager and combines traditional incident
              management tools like OpsGenie and ServiceNow into a centralized
              platform
            </p>
            <p className="mb-4 font-medium">
              Read our Medium article to learn more about the problem we&apos;re
              tackling and how we landed on the idea
            </p>
            <Link
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

    </div>
  );
}
