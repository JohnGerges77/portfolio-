import Link from "next/link";
import TechIcon from "../components/TechIcon";
import GitHub from "../assets/icons/github.svg";
import WhatsApp from "../assets/icons/icons8-whatsapp.svg";
import LinkedIn from "../assets/icons/icons8-linkedIn.svg";
const Social = [

  {
    title: "WhatsApp",
    icon: WhatsApp,
   link: "https://wa.me/201278528656",
  },
  {
    title: "GitHub",
    icon: GitHub,
    link: "https://github.com/JohnGerges77",
  },
  {
    title: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/john-gerges-35629b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
const SocialIcons = () => {
  return (
      <div className="flex gap-3 sm:gap-5">
            {Social.map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className="py-2 px-3 rounded-lg cursor-pointer "
              >
                <TechIcon component={item.icon} />
              </Link>
            ))}
          </div>
  )
}

export default SocialIcons
