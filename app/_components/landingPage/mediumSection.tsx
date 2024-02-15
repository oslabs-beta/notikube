import Link from "next/link";

export default function MediumArticleSection() {
  return (
    <section className="bg-white dark:bg-gray-900 flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Managing Incidents for Modern-Day DevOps Teams
          </h2>
          <p className="mb-4 font-light">
            NotiKube is a lightweight incident management platform that utilizes
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
  );
}
