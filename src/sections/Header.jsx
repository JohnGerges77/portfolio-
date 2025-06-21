import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        <Link href="#home" className="nav-item hover:bg-white/10">
          Home
        </Link>

        <Link href="#projects" className="nav-item hover:bg-white/10">
          Projects
        </Link>

        <Link href="#skills" className="nav-item hover:bg-white/10">
          Skills
        </Link>

        <Link href="#contact" className="nav-item bg-white !text-black hover:bg-white/80">
          Contact
        </Link>
      </nav>
    </div>
  );
};
