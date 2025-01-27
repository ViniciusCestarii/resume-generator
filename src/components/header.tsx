import { ResumeData } from "../types/resume";
import { Link } from "./ui/link";

interface HeaderProps {
  name: Pick<ResumeData, "name">["name"];
  contact: Pick<ResumeData, "contact">["contact"];
}

function Header({ name, contact }: HeaderProps) {
  return (
    <header className="text-center mb-8">
      <div className="flex justify-between mb-2">
        <div className="text-left text-sm">
          <p>{contact.address}</p>
          <p><Link href={`https://www.linkedin.com/${contact.linkedin}`}>{contact.linkedin}</Link></p>
        </div>
        <h1 className="text-4xl font-normal">{name}</h1>
        <div className="text-right text-sm">
          <p>{contact.phone}</p>
          <p><Link href={`mailto:${contact.email}`}>{contact.email}</Link></p>
        </div>
      </div>
    </header>
  );
}

export default Header;