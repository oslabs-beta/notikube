import Image from "next/image";

export default function FirstInfoSection() {
  return (
    <div>
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
    </div>
  );
}
