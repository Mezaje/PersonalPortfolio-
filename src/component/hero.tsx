"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0e10] px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">

          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Abdallah
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Basheer.
            </span>
          </h1>

          {/* Role */}
          <p className="mt-7 text-lg font-medium text-gray-400 sm:text-xl">
            Frontend & React Native Engineer
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            I build modern, scalable and high-performance web and mobile
            experiences with React, React Native and TypeScript.
          </p>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/Mezaje"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <FaGithub
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/abzsheer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <FaLinkedin
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-lg hover:shadow-white/10"
            >
              Check out Resume
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              Contact Me
              <span className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#work"
            className="mt-20 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-600 transition-colors hover:text-gray-400"
          >
            <span>Scroll to explore</span>
            <span className="h-8 w-px bg-gradient-to-b from-gray-500 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
