import Link from "next/link";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
const footerLinks = [

  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/john-gerges-35629b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/201278528656",
  },
  {
    title: "GitHub",
    href: "https://github.com/JohnGerges77",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -z-10
       -translate-x-1/2 bg-emerald-300/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center">
        <nav className="flex flex-col md:flex-row items-center gap-8 mt-6">
          {footerLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold ">
                {item.title}
              </span>
                <ArrowUpRightIcon className="size-4" />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
