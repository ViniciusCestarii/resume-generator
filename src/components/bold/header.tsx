import { ResumeData } from "../../types/resume";

interface HeaderProps {
  name: ResumeData["name"];
  contact: ResumeData["contact"];
}

function Header({ name, contact }: HeaderProps) {
  return (
    <header className="mb-4">
      <h1 className="text-7xl font-bold">{name}</h1>
      <div className="flex justify-between mb-2">
        <div className="text-sm flex flex-wrap gap-2">
          <p>{contact.address}</p> |
          <p>{contact.phone}</p> |
          <p>{contact.email}</p> |
          <p>{contact.linkedin}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;