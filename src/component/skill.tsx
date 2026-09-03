import { FaReact,FaCode} from "react-icons/fa";
import { SiExpo } from "react-icons/si";



export default function Skill() {
    return (
      <div id="Skills" 
      className="border-b border-white/10 bg-[#17181b] px-6 py-24 text-white md:px-10 lg:px-16"
      >
      <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
      Technical Skills
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2  h-[400px]">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-[#17181b]  lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <FaReact color="white" size={70} />

                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Frontend Developer</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  React · TypeScript · JavaScript (ES6+) · Redux Toolkit · Context API · Custom Hooks · Next.js (familiar)

Building reusable, maintainable component architectures with predictable state management. I lean on Redux Toolkit and custom hooks to keep complex apps organized as they scale, and write in TypeScript by default for safer, more maintainable code.
                  </p>

                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </div>
            <div className="relative lg:row-span-2">
               <div className="absolute inset-px rounded-lg bg-[#17181b]  max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <SiExpo color="white" size={70} />

                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Mobile Developer</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  React Native · Expo · Redux Persist · FlatList Optimization · Memoization

Shipping production-grade mobile apps that hold up under real traffic. My focus is on stability and performance — memoization, list virtualization, and efficient data flows that keep apps smooth even with large datasets, currently maintaining 99%+ crash-free sessions in production.
                  </p>
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-[#17181b]  max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <FaCode color="white" size={70} />

                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Integration</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  REST APIs · GraphQL · Axios · Firebase

Connecting frontend and mobile apps to real data sources — consuming REST and GraphQL APIs, handling auth and data flows with Firebase, and working closely with backend teams to keep integrations reliable.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  