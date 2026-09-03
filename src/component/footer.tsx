import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: "About", href: "#AboutMe" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#Experience" },
  { name: "Contact", href: "#ContactMe" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0d0e10]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <a
            href="#Hero"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
              AB
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Abdallah Basheer
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                Frontend & React Native Engineer
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Mezaje"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-gray-500 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/abzsheer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-gray-500 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-600 sm:flex-row">
          <p>
            © {currentYear} Abdallah Basheer. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-gray-400">React</span>
            {" · "}
            <span className="text-gray-400">TypeScript</span>
            {" · "}
            <span className="text-gray-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

