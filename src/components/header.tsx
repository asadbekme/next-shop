"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.jpeg";
import { navLinks } from "@/lib/constants";
import { useEffect } from "react";

const Header = () => {
  const { push } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header") as HTMLElement;
      if (window.scrollY > 0) {
        header.classList.add("bg-white", "shadow");
      } else {
        header.classList.remove("bg-white", "shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="logo image" width={100} height={20} />
          </Link>

          <div className="flex items-center gap-x-5">
            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-x-5 items-center">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="text-lg capitalize opacity-60 hover:opacity-100 transition-all ease-in-out duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={() => push("/shopping-cart")}
              className="button bg-indigo-500 text-white border-transparent hover:border-indigo-600 hover:bg-transparent hover:text-black"
            >
              My bag
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
