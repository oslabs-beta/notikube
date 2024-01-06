// TeamMember.js
import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  avatarSrc: string;
  githubLink: string;
  linkedinLink: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, avatarSrc, githubLink, linkedinLink, role }) => {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <Image
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={avatarSrc}
        width={200}
        height={200}
        alt={name}
      />
      <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        <a>{name}</a>
      </h3>
      <p>{role}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        <li>
          <Link
            href={githubLink}
            className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
          >
            <Image
              src="/landingPage/profileSection/githubLogo.svg"
              alt="GitHub Logo"
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link
            href={linkedinLink}
            className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
          >
            <Image
              src="/landingPage/profileSection/linkedinLogo.svg"
              alt="LinkedIn"
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamMember;
