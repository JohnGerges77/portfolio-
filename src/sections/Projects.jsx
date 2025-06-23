import FirstProject from "../assets/images/first project.png";
import SecondProject from "../assets/images/second project.png";
import ThirdProject from "../assets/images/Third Project.png";
import FourthProject from "../assets/images/Fourth Project.png";
import CheckIcon from "../assets/icons/check-circle.svg";
import SparkleIcon from "../assets/icons/sparkle.svg";
import StarIcon from "../assets/icons/star.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import GrainImage from "../assets/images/grain.jpg";
import Link from "next/link";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Gruadation Project",
    year: "2025",
    title: "JAWLA",
    results: [
      { title: "Fast and responsive web dashboard." },
      { title: "Tailwind CSS for modern and clean design." },
      { title: "Integrated secure online payment gateways." },
    ],
    link: "https://jawla-rose.vercel.app/",
  
    repo: "https://github.com/JohnGerges77/jawla",

    image: FirstProject,
  },
  {
    company: "hotel management system",
    year: "2024",
    title: "The Wild Oasis",
    results: [
      { title: "Next.js and Tailwind for a fast and responsive UI." },
      { title: "Integrated Next-Auth (Google Provider)." },
      { title: "Supabase for efficient database management." },
    ],
    link: "https://the-wild-oasis-two-flame.vercel.app/",
     repo: "https://github.com/JohnGerges77/The_Wild_Oasis",
    image: SecondProject,
  },
    {
    company: "courses E-commmerce",
    year: "2023",
    title: "Next Skill",
    results: [
      { title: "Strapi for efficient database management." },
      { title: "Clerk authentication for secure user access" },
      { title: "Stripe for secure and real-time payment." },
    ],
    repo: "https://github.com/JohnGerges77/NextSkill",
    image: FourthProject,
  },
  {
    company: "Gsap Animation",
    year: "2024",
    title: "Arcane",
    results: [
      { title: "GSAP for smooth, high-performance animations." },
      { title: " Tailwind for a responsive and modern design." },
      { title: "visually rich interface with dynamic." },
    ],
    link: "https://arcane-chi.vercel.app/",
         repo: "https://github.com/JohnGerges77/Arcane",
    image: ThirdProject,
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="">
        <div className="flex justify-center">
          <p
            className="uppercase font-semibold tracking-widest 
          bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text
          text-transparent text-center"
          >
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl  text-white/60 mt-6 max-w-md mx-auto">
          See how i transformed concepts into engaging digital experiences.
        </p>
        <div className="absolute">
          <SparkleIcon className="size-10 text-emerald-300/20 absolute top-52  left-10" />
          <StarIcon className="size-8 text-emerald-300 absolute top-[800px] left-16" />
          <StarIcon className="size-5 text-emerald-300 absolute left-3 top-[1120px]" />
        </div>
        <div className="absolute left-[90%]">
          <StarIcon className="size-9 text-emerald-300/20 absolute left-1 top-[500px] " />
          <StarIcon className="size-6 text-emerald-300  absolute left-5 top-[320px]" />
        </div>
        <div className="flex items-center flex-col gap-20 mt-10 md:mt-20 min-h-[300vh]">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 z-0 overflow-hidden after:z-10
            rounded-3xl  after:content-[''] after:absolute 
             after:inset-0 after:outline-2 after:outline after:-outline-offset-2
              after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16
               lg:px-16 after:pointer-events-none lg:w-[85%] xl:w-[70%] mx-4 sticky "
              style={{
                top: `calc(64px + ${index * 30}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-20">
                  <div
                    className="uppercase font-bold tracking-widest 
                bg-gradient-to-r from-emerald-300 to-sky-400
                bg-clip-text text-transparent gap-2 inline-flex text-sm"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className=" text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex text-white/50 text-sm md:text-base gap-2"
                        key={result.title}
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex lg:flex-row flex-col items-center  sm:gap-5">
                 { project.title!=='Next Skill' && <Link href={project.link}>
                      <button
                        className='
                        
                         
                        bg-white
                         text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                     flex justify-center items-center gap-1 mt-8 cursor-pointer'
                      >
                      
                          
                          View Live Site
                        <ArrowUpRight className="size-4" />
                      </button>
                    </Link>}
                    <Link href={project.repo}>
                      <button
                        className=" bg-gray-950 text-gray-50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                     flex justify-center items-center gap-1 mt-5 sm:mt-1 cursor-pointer lg:mt-8"
                      >
                        
                           Github Repo
                         
                        <ArrowUpRight className="size-4" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-5 md:-mb-0 lg:mt-0 lg:absolute
                     lg:h-full lg:w-auto lg:max-w-none rounded-t-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
