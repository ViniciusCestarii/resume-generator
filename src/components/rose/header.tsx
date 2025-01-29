import { ResumeData } from "../../types/resume";

interface HeaderProps {
  name: ResumeData["name"];
  contact: ResumeData["contact"];
}

function Header({ name, contact }: HeaderProps) {
  return (
    <header className="px-rose-padding pt-rose-padding bg-rose-300/50 h-64">
      <h1 className="text-4xl font-bold">{name}</h1>
      <div className="bg-[#333a30] h-025 w-10" />
      <ul className="space-y-3 pt-3">
        <li className="flex gap-2 text-sm">
          <div className="size-6 rounded-full p-1 bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></div>
          <p>{contact.email}</p>
        </li>
        <li className="flex gap-2 text-sm">
          <div className="size-6 rounded-full p-1 bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
          <p>{contact.phone}</p>
        </li>
        <li className="flex gap-2 text-sm">
          <div className="size-6 rounded-full p-1 bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg></div>
          <p>{contact.address}</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;