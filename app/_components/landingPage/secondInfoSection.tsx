import Link from "next/link";
import Image from "next/image";
export default function SecondInfoSection() {

    return (
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
        
    )
}