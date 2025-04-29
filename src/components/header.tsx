"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cinzel } from "next/font/google";

// Load Cinzel font - an elegant serif font with ancient/historical feel
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export default function Header() {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between w-full z-50 fixed bg-white/90 text-black shadow-sm">
        <nav className="container flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="object-cover h-16 w-16"
            />
            <h1 className={`${cinzel.className} text-xl font-bold text-[#718355]`}>
              BeSenbet
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive("/")
                  ? "bg-[#edf1e7] text-[#718355] font-medium"
                  : "text-black hover:bg-[#edf1e7] hover:text-[#718355]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/catalog"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive("/catalog")
                  ? "bg-[#edf1e7] text-[#718355] font-medium"
                  : "text-black hover:bg-[#edf1e7] hover:text-[#718355]"
              }`}
            >
              Catalog
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive("/about")
                  ? "bg-[#edf1e7] text-[#718355] font-medium"
                  : "text-black hover:bg-[#edf1e7] hover:text-[#718355]"
              }`}
            >
              About
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
