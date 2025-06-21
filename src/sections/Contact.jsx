import Link from "next/link";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 flex justify-center">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl text-center md:text-left text-gray-900 py-8 px-10 max-w-5xl">
        <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
          <div>
            <h2 className="font-semibold text-2xl md:text-3xl">
              Let&apos;s create smoothing amazing together
            </h2>
            <p className="text-sm md:text-base mt-2">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you to achieve your goals
            </p>
          </div>
          <div>

          <button
            className="text-white bg-gray-900 inline-flex items-center px-6 h-12 
            rounded-xl gap-2 w-max  cursor-pointer"
            >
              <Link href="https://wa.me/201278528656">
            <span className="font-semibold">Contact Me</span>
              </Link>
            <ArrowUpRightIcon className="size-4" />
          </button>
            </div>
        </div>
      </div>
    </section>
  );
};
