import Link from "next/link";
import TeamMember from "./TeamMember";
export default function TeamInfoSection() {
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
    return(
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

    )
}