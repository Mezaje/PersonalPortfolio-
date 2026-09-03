export const profile = {
    name: 'Abdallah Basheer',
    role: 'Frontend & React Native Engineer',
    location: 'Dubai, UAE',
    phone: '+971 54 284 9015',
    email: 'abdallah.basheer@gmail.com',
    linkedin: 'linkedin.com/in/abzsheer',
    linkedinUrl: 'https://linkedin.com/in/abzsheer',
    summary:
      "6+ years building high-performance, SEO-optimized web apps and production-grade mobile apps for the UAE market — from React & Next.js storefronts to React Native apps holding 99%+ crash-free sessions.",
  }
  
  export const competencies = [
    {
      group: 'Frontend',
      items: ['React', 'Next.js (SSR/SSG/ISR)', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Context API', 'Custom Hooks'],
    },
    {
      group: 'Mobile',
      items: ['React Native', 'Expo', 'Redux Persist', 'FlatList Optimization', 'Memoization'],
    },
    {
      group: 'Performance & SEO',
      items: ['Code Splitting', 'Lazy Loading', 'TTI Optimization', 'Accessibility', 'Responsive Design'],
    },
    {
      group: 'Integration',
      items: ['REST APIs', 'GraphQL', 'Axios', 'Firebase'],
    },
    {
      group: 'Tooling',
      items: ['Jest', 'Docker', 'CI/CD', 'Git', 'Sentry'],
    },
  ]
  
  export type Experience = {
    code: string
    role: string
    company: string
    location: string
    dates: string
    gate: string
    points: string[]
  }
  
  export const experience: Experience[] = [
    {
      code: 'HQ-24',
      role: 'Mobile Application Developer',
      company: 'HiQuota',
      location: 'Dubai, UAE',
      dates: '2024 — Present',
      gate: 'React Native',
      points: [
        'Developed and optimized a large-scale classifieds application using React Native and Expo.',
        'Built scalable state management using Redux Toolkit, Redux Thunk, Redux Persist, and Context API.',
        'Achieved 99%+ crash-free sessions using Sentry and Firebase Crashlytics.',
        'Improved rendering performance through memoization, FlatList optimization, and efficient data flows.',
        'Collaborated with backend teams to improve API performance and reliability.',
      ],
    },
    {
      code: 'AD-23',
      role: 'Front-End Developer',
      company: 'Arabs Dev',
      location: 'Sharjah, UAE',
      dates: '2023 — 2024',
      gate: 'Next.js',
      points: [
        'Built SEO-optimized web applications using React and Next.js, driving stronger organic visibility.',
        'Reduced Time to Interactive (TTI) through lazy loading and code splitting strategies.',
        'Implemented Redux Toolkit for predictable, scalable state management across the app.',
        'Developed a reusable component library that accelerated feature development across teams.',
        'Integrated REST and GraphQL APIs to support dynamic, data-driven interfaces.',
      ],
    },
    {
      code: 'KT-22',
      role: 'Fullstack Developer',
      company: 'Kanoon Tech',
      location: 'Dubai, UAE',
      dates: '2022 — 2023',
      gate: 'Node.js',
      points: [
        'Built full-stack applications using React on the frontend with Node.js, Express, and MongoDB/MySQL on the backend.',
        'Developed REST APIs and integrated third-party services.',
        'Managed complex frontend state using Redux Toolkit.',
        'Optimized database queries and application performance.',
      ],
    },
  ]
  
  export type Project = {
    name: string
    tagline: string
    stack: string
    description: string
  }
  
  export const projects: Project[] = [
    {
      name: 'HiQuota',
      tagline: 'Classifieds Platform',
      stack: 'React Native, Expo, Redux Toolkit',
      description:
        'High-traffic mobile application with advanced filtering, optimized UX, and 99%+ crash-free sessions.',
    },
    {
      name: 'Today Trip',
      tagline: 'Tourism Platform',
      stack: 'Next.js (SSR/SSG)',
      description:
        'SEO-focused, fast-loading experiences tailored for the UAE tourism market.',
    },
    {
      name: 'Maraheb',
      tagline: 'Event Management System',
      stack: 'React, Node.js, MongoDB',
      description:
        'End-to-end ticketing and event management workflows, from booking to check-in.',
    },
  ]
  
  export const education = {
    degree: "Bachelor's Degree in Information Technology",
    school: 'Alsharq University',
    dates: '2016 — 2021',
  }
  
  export const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Advanced' },
  ]
  