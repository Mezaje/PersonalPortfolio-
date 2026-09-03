export default function Contact() {
    return (
      <section
        id="ContactMe"
        className="border-b border-white/10 bg-[#17181b] px-6 py-24 text-white md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Top line */}
          <div className="mb-16 h-px w-full bg-white/15" />
  
          <div className="grid gap-12 md:grid-cols-[1fr_320px] md:items-end">
            {/* Main content */}
            <div>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
                02 — Contact
              </p>
  
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                Let's build something
                <br />
                <span className="text-white/35">great together.</span>
              </h2>
  
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                I'm always open to discussing new projects, interesting
                opportunities, and ideas worth building.
              </p>
            </div>
  
            {/* Contact actions */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:foxv99@gmail.com"
                className="group flex items-center justify-between border border-white/20 px-5 py-4 transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-[#17181b]"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em]">
                  Email Me
                </span>
  
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
  
              <a
                href="https://www.linkedin.com/in/abzsheer/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/20 px-5 py-4 transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-[#17181b]"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em]">
                  LinkedIn
                </span>
  
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
  
          {/* Footer */}
          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row">
            <span>Available for opportunities</span>
            <span>Dubai, UAE</span>
          </div>
        </div>
      </section>
    );
  }