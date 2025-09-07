"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";

interface HeaderProps {}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[70px] bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <MaxWidthWrapper className="h-full flex items-center justify-between overflow-y-hidden">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          <Image
            src={"/logos/3.svg"}
            alt={"loading the data"}
            width={150}
            height={40}
            className="flex-shrink-0"
          />
          <Button disabled>Rejoindre la liste d'attente</Button>
        </div>

        {/* Mobile layout - centered logo only */}
        <div className="flex md:hidden w-full justify-center">
          <Image
            src={"/logos/3.svg"}
            alt={"loading the data"}
            width={80}
            height={40}
            className="flex-shrink-0"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
