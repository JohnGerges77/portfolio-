import Link from "next/link";
import TechIcon from "../components/TechIcon";
import GitHub from "../assets/icons/github.svg";
import WhatsApp from "../assets/icons/icons8-whatsapp.svg";
import LinkedIn from "../assets/icons/icons8-linkedin.svg";

const Social = [
  {
    title: "WhatsApp",
    icon: WhatsApp,
    link: "https://wa.me/201278528656",
    glow: "rgba(52, 211, 153, 0.35)",
  },
  {
    title: "GitHub",
    icon: GitHub,
    link: "https://github.com/JohnGerges77",
    glow: "rgba(148, 163, 184, 0.35)",
  },
  {
    title: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/john-gerges-35629b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    glow: "rgba(56, 189, 248, 0.35)",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-3 sm:gap-5">
      {Social.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          aria-label={item.title}
          className="group relative isolate flex size-14 items-center justify-center overflow-visible rounded-2xl border border-white/10 bg-white/[0.03] cursor-pointer transition duration-300 ease-out hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.08] hover:shadow-[0_0_32px_var(--social-glow)] focus-visible:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          style={{ "--social-glow": item.glow }}
        >
          <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-300/20 via-white/5 to-sky-400/20 opacity-0 blur-sm transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          <span className="absolute inset-[1px] -z-10 rounded-2xl bg-gray-950/80" />
          <span className="absolute -inset-1 -z-20 rounded-[1.35rem] bg-gradient-to-r from-emerald-300/0 via-emerald-300/25 to-sky-400/0 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          <span className="transition duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 group-focus-visible:scale-110 group-focus-visible:-rotate-6">
            <TechIcon component={item.icon} />
          </span>
          <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 translate-y-1 rounded-full border border-white/10 bg-gray-950/95 px-3 py-1 text-xs font-semibold text-white/80 opacity-0 shadow-lg shadow-black/30 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
