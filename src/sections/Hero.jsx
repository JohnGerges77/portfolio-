import Image from "next/image";
import ImageIcon from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import StarIcon from "../assets/icons/star.svg";
import SparkleIcon from "../assets/icons/sparkle.svg";
import grainImage from "../assets/images/grain.jpg";
import HeroOrbit from "../components/HeroOrbit";

import SocialIcons from '../components/SocialIcons'
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] -z-30 absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[820px] -z-30 absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1020px] -z-30 absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1220px] -z-30 absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='5s' >
          <SparkleIcon className="size-8 text-emerald-300/20"  />
        </HeroOrbit>
          <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='5s'>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='5s'>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={770} rotation={-85} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='5s'>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={98} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={640} rotation={165} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-7 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-90} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='7s'>
          <StarIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
       

        <HeroOrbit size={700} rotation={-55} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='12s'>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={140} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='6s'>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={780} rotation={-30} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='6s'>
          <SparkleIcon className="size-11 text-emerald-300/20" />
        </HeroOrbit>

      


        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='40s'>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>


        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='35s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-10} shouldOrbit orbitDuration='40s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="">
        <div className="flex flex-col items-center">
          <Image src={ImageIcon} alt="img" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-4 rounded-3xl py-1.5 inline-flex items-center gap-2">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 rounded-full absolute animate-ping-large"></div>
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="md:max-w-lg mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-center mt-7 ">
            John Gerges
          </h1>
          <h2 className="text-3xl md:text-4xl tracking-wide text-center mt-2   bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text  text-transparent">
            Front-End Developer
          </h2>
          <p className="text-center my-4 text-white/60 md:text-lg">
            I specialize in design into functional, high-performing web
            applications. Let’s discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-2xl cursor-pointer">
            <span className="font-semibold">Download My CV</span>
            <ArrowDown className=" size-4 animate-bounce" />
          </button>
          <Link href='#contact' className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-2xl bg-white text-gray-900 cursor-pointer">
            <span className="font-semibold">Let’s Connect</span>
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
     <SocialIcons />
        </div>
      </div>
    </section>
  );
};
