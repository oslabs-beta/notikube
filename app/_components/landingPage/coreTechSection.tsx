import Link from "next/link";
import Image from "next/image";
export default function CoreTechSection() {

    return (
        <div>
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

          
        </div>
    )
}