import { ResumeData } from "../../types/resume";

interface ProfileProps {
  profile: ResumeData["profile"];
}

function Profile({ profile }: ProfileProps) {
  return (
    <section className="px-rose-padding flex flex-col justify-center bg-rose-100 h-64">
      <h3 className="text-2xl uppercase mb-4">{profile.title}</h3>
      <p className="text-sm leading-tight tracking-tight">{profile.description}</p>
    </section>
  );
}

export default Profile;