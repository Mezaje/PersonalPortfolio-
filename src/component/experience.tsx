import { experience } from "../data/cv";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="border-b border-white/10 bg-[#17181b] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20 flex items-center justify-between">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Work Experience
          </h2>

          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-white/30 md:block">
            01 — Experience
          </span>
        </div>

        {/* Experience grid */}
        <div className="grid gap-x-16 gap-y-20 md:grid-cols-2 lg:gap-x-24">
          {experience.map((job, index) => (
            <article
              key={job.code}
              className="group relative"
            >
              {/* Top line */}
              <div className="mb-6 h-px w-full bg-white/15 transition-colors duration-300 group-hover:bg-white/40" />

              {/* Header */}
              <div className="grid grid-cols-[150px_1fr] gap-6">
                {/* Date */}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">
                    {job.dates}
                  </p>

                  <span className="mt-4 block font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Job info */}
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-[22px]">
                    {job.role}
                  </h3>

                  <p className="mt-3 text-sm text-white/45">
                    {job.company}
                  </p>

                  <p className="mt-1 font-mono text-[11px] text-white/25">
                    {job.location}
                  </p>
                </div>
              </div>



              {/* Description */}
              <div className="mt-7 ml-[174px] space-y-4">
                {job.points.map((point) => (
                  <p
                    key={point}
                    className="text-[14px] leading-6 text-white/55 transition-colors duration-200 group-hover:text-white/70 md:text-[15px]"
                  >
                    {point}
                  </p>
                ))}
              </div>

              {/* Bottom metadata */}
              <div className="mt-8 ml-[174px] flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Ref
                </span>

                <span className="font-mono text-[11px] text-white/40">
                  {job.code}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}