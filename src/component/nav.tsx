"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "#AboutMe" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#Experience" },
  { name: "Contact", href: "#ContactMe" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href="#Hero"
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white shadow-lg shadow-black/20 backdrop-blur transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
              AB
            </div>

            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              Abdallah Basheer
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center rounded-full border border-white/10 bg-[#111214]/70 px-2 py-2 shadow-xl shadow-black/10 backdrop-blur-xl lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#ContactMe"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
          >
            Let's talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 backdrop-blur transition hover:bg-white/[0.08] hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-white/10 bg-[#0d0e10] p-6 shadow-2xl sm:max-w-sm">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <a
              href="#Hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white">
                AB
              </div>

              <span className="text-sm font-semibold text-white">
                Abdallah Basheer
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-10">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-transparent px-4 py-3 text-base font-medium text-gray-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <a
                href="#ContactMe"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-200"
              >
                Let's talk
                <span>→</span>
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

