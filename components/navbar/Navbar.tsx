"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links, NavLink } from "@/lib/constants/links";
import { ROUTES } from "@/lib/constants/routes";
import { Button, Separator } from "@/components/ui";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white">
      <nav
        className="flex items-center justify-between py-[8px] px-[16px] md:px-[32px] lg:px-[40px] xl:px-[80px] 2xl:px-[120px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex pr-[0px] xl:pr-[85px]">
          <Link href={ROUTES.HOME} aria-label="Go Wheels Home">
            <Image
              src="/images/Logo.svg"
              alt="Go Wheels Logo"
              width={116}
              height={42}
              className="w-[70px] h-auto md:w-[100px] 2xl:w-[116px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex p-[16px] rounded-[50px] bg-white shadow-[0px_6px_12px_0px_rgba(234,88,12,0.12)]"
          aria-label="Desktop navigation"
        >
          <ul className="flex gap-[48px] items-center" role="menubar">
            {Links.map((link: NavLink) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.key} role="none">
                  <Link
                    href={link.href}
                    className={`text-[16px] font-normal leading-[24px] font-poppins hover:text-[var(--primary)] transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--neutral-headings)]"
                    }`}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div
          className="hidden xl:flex items-center gap-[16px]"
          role="group"
          aria-label="User actions"
        >
          <Link href={ROUTES.VEHICLES}>
            <Button className="text-[var(--primary)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--white)] border-none outline-none shadow-none rounded-none px-0 py-0 hover:underline underline-offset-[4px] transition-colors duration-200">
              Rent a car
            </Button>
          </Link>
          <Separator
            orientation="vertical"
            className="!h-[25px] !w-[1.5px] !bg-[var(--neutral-body-text)]"
            aria-hidden="true"
          />
          <Link href={ROUTES.SIGNIN}>
            <Button className="text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none shadow-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200">
              Sign in
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <Button
            onClick={toggleMenu}
            className="border-none outline-none shadow-none rounded-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X
                className="size-[20px] text-[var(--primary)]"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="size-[20px] text-[var(--primary)]"
                aria-hidden="true"
              />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <aside
          id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-full bg-[var(--accent)] transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          inert={!isMenuOpen || undefined}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex justify-end p-4">
            <Button
              onClick={closeMenu}
              className="border-none outline-none shadow-none rounded-none px-0 py-0"
              aria-label="Close mobile menu"
            >
              <X
                className="size-[24px] text-[var(--primary)]"
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="px-6 py-8 flex flex-col gap-[48px]">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6" role="menu">
                {Links.map((link: NavLink) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <li key={link.key} role="none">
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`text-[18px] font-medium leading-[24px] font-poppins hover:text-[var(--primary)] transition-colors duration-200 ${
                          isActive
                            ? "text-[var(--primary)]"
                            : "text-[var(--white)]"
                        }`}
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="flex flex-col gap-[24px]"
              role="group"
              aria-label="Mobile user actions"
            >
              <Link href={ROUTES.VEHICLES} onClick={closeMenu}>
                <Button className="w-full text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200">
                  Rent a car
                </Button>
              </Link>
              <Link href={ROUTES.SIGNIN} onClick={closeMenu}>
                <Button className="w-full text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
};
