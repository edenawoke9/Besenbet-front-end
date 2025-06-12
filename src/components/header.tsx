"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cinzel } from "next/font/google";
import { Menu, X, ShoppingBag, User } from "lucide-react";

// Load Cinzel font - an elegant serif font with ancient/historical feel
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="BeSenbet Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <h1 className={`${cinzel.className} text-xl font-bold text-[#718355] hidden sm:block`}>
              BeSenbet
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-[#718355] font-semibold"
                    : "text-gray-600 hover:text-[#718355]"
                } transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-[#718355] transition-colors duration-200"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-[#718355] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href="/account"
              className="p-2 text-gray-600 hover:text-[#718355] transition-colors duration-200 hidden sm:block"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-600 hover:text-[#718355] transition-colors duration-200 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 ${
                  isActive(link.href)
                    ? "text-[#718355] font-semibold"
                    : "text-gray-600 hover:text-[#718355]"
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              className="block py-2 px-4 text-gray-600 hover:text-[#718355] transition-colors duration-200 sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
