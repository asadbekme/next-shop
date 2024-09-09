"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header") as HTMLElement;
      if (window.scrollY > 0) {
        header.classList.add("bg-inherit", "border-b");
      } else {
        header.classList.remove("bg-inherit", "border-b");
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
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="h-[40px] md:h-14 flex items-center gap-x-2">
            <Image src={Logo} alt="logo image" className="h-full w-14 object-left object-contain" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex flex-wrap md:gap-x-4 lg:gap-x-6 items-center">
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

          <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6">
            <ModeToggle />
            <Button
              className="flex md:hidden"
              variant="outline"
              size="icon"
              onClick={onOpen}
            >
              <Menu />
              <span className="sr-only">Mobile menu</span>
            </Button>
            <Button asChild>
              <Link href="/shopping-cart">My bag</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <MobileMenu isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
