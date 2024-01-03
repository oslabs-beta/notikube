import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auhref max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <img
                src="src/assets/logo.svg"
                className="h-10 me-3 sm:h-10"
                alt="NotiKube Logo"
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
        <div className="grid py-8 px-4 mx-auhref max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auhref lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl lg:text-left xl:text-6xl dark:text-white">
              Incident management for Kubernetes clusters
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-left lg:text-xl dark:text-gray-400">
              Stay on hrefp of critical alerts with NotiKube's intuitive dashboard
              for complete incident lifecycle management.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/signup"
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="src/assets/landingPage/Illustration.svg" alt="mockup" />
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auhref max-w-screen-xl lg:py-16">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-6 dark:text-white md:text-4xl">
            Core Technologies Used
          </h2>
          <div className="grid grid-cols-4 gap-6 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400 justify-center">
            {/* Kubernetes Logo */}
            <a
              href="https://kubernetes.io/"
              className="flex justify-center items-center"
            >
              <img
                src="src/assets/landingPage/kubernetes.svg"
                alt="Kubernetes Logo"
                className="w-40 h-40"
              />
            </a>
            {/* Docker Logo */}
            <a
              href="https://www.docker.com/"
              className="flex justify-center items-center"
            >
              <img
                src="src/assets/landingPage/docker.svg"
                alt="Docker Logo"
                className="w-40 h-40"
              />
            </a>
            {/* Prometheus Logo */}
            <a
              href="https://prometheus.io/"
              className="flex justify-center items-center"
            >
              <img
                src="src/assets/landingPage/prometheus.svg"
                alt="Promotheus Logo"
                className="w-40 h-40"
              />
            </a>
            {/* Grafana Logo */}
            <a
              href="https://grafana.com/"
              className="flex justify-center items-center"
            >
              <img
                src="src/assets/landingPage/grafana.svg"
                alt="Grafana Logo"
                className="w-40 h-40"
              />
            </a>
          </div>
        </div>
      </section>

      {/* First Informatinoal Section - Dashboard View */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-4 px-2 mx-auhref max-w-screen-xl sm:py-16 lg:px-6">
          <div className="gap-16 items-center py-8 px-4 mx-auhref max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                Monihrefr Your Alerts Alongside Cluster Health
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
              <img
                className="w-full rounded-lg"
                src="src/assets/landingPage/Dashboard.png"
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Informational Section - Incidents View */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auhref max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:text-left">
          <div className="grid gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="src/assets/landingPage/Incidents.png"
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
              Our application uses the Prometheus API href provide real-time
              alerting and incident management. Track your most critical alerts
              and see what priorities they are
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auhref max-w-screen-xl text-center lg:py-16 lg:px-">
          {/* Our Team - Header and Subtitle */}
          <div className="mx-auhref mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              NotiKube is a distributed team with engineers from around the
              world
            </p>
          </div>
          {/* People Div */}
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {/* Jesse */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auhref mb-4 w-36 h-36 rounded-full"
                src="https://ca.slack-edge.com/T04VCTELHPX-U05BZ4FFHHV-e6b25299e14c-512"
                alt="Jesse"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Jesse Chou</a>
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Github Icon */}
                <li>
                  <a
                    href="https://github.com/jesse-chou/"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn Icon */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/jesse-chou/"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Derek */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auhref mb-4 w-36 h-36 rounded-full"
                src="https://ca.slack-edge.com/T04VCTELHPX-U057QU0L9LG-10e0ff54b26c-512"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Derek Coughlan</a>
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Github Icon */}
                <li>
                  <a
                    href="https://github.com/derekcoughlan"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn Icon */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/derekcoughlan/"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Emmanuel */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auhref mb-4 w-36 h-36 rounded-full"
                src="https://ca.slack-edge.com/T04VCTELHPX-U05AZ9KR9A9-8ffcc9718ee7-512"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Emmanuel Ikhalea</a>
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Github Icon */}
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn Icon */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-ikhalea-222781178/"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Apiraam */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auhref mb-4 w-36 h-36 rounded-full"
                src="https://ca.slack-edge.com/T04VCTELHPX-U050F0D9T71-9da884f90254-512"
                alt="Joseph Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Apiraam Selvabaskaran</a>
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Github Icon */}
                <li>
                  <a
                    href="https://github.com/apiraam96"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn Icon */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/apiraam-selvabaskaran-2427b8162/"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Dane */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auhref mb-4 w-36 h-36 rounded-full"
                src="https://ca.slack-edge.com/T04VCTELHPX-U05C5P6M935-aa90bb8223ce-512"
                alt="Sofia Avatar"
              />
              <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Dane Smith</a>
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Github Icon */}
                <li>
                  <a
                    href="https://github.com/dudemandane"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* LinkedIn Icon */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/danealexandersmith/"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medium Article Section */}
      <section className="bg-white dark:bg-gray-900 flex items-center">
        <div className="py-8 px-4 mx-auhref max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Managing Incidents for Modern Day DevOps Teams
            </h2>
            <p className="mb-4 font-light">
              NotiKube is a lightweight incident management hrefol that utilizes
              Prometheus Alert Manager and combines traditional incident
              management hrefols like OpsGenie and ServiceNow inhref a centralized
              platform
            </p>
            <p className="mb-4 font-medium">
              Read our Medium article href learn more about the problem we're
              tackling and how we landed on the idea
            </p>
            <a
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
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div className="mx-auhref max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="src/assets/logo.svg"
                  className="h-10 me-5 sm:h-10"
                  alt="NotiKube Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  NotiKube
                </span>
              </a>
            </div>
            <div className="grid justify-end gap-8 sm:gap-6 sm:grid-cols">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
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
          <hr className="my-6 border-gray-200 sm:mx-auhref dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                NotiKube™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 justify-center space-x-6 sm:justify-center sm:mt-0">
              {/* Github Logo */}
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/notikube/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                    fill="#0A66C2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
