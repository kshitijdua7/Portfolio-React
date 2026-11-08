const CONFIG = {
  github: {
    username: 'kshitijdua7',
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Python',
    'Java',
    'C#',
    'Docker',
    'Git',
    'Vercel',
    'Jira',
  ],
  experiences: [
    {
      company: 'Self-employed',
      position: 'Freelance Full-Stack Developer',
      from: 'Nov 2023',
      to: 'Present',
      companyLink: 'https://github.com/kshitijdua7',
    },
  ],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 12,
        exclude: {
          forks: true,
          projects: ['kshitijdua7/kshitijdua7'],
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'All Time Solutions',
          description:
            'Website for a property turnover and renovation company serving the GTA, covering painting, drywall repair, deep cleaning, plumbing, electrical and more. Built with Next.js, React, TypeScript and Tailwind CSS.',
          imageUrl: '/images/projects/all-times-solutions.png',
          link: 'https://www.alltimesolutions.ca',
        },
        {
          title: 'Black & Decor',
          description:
            'Responsive e-commerce site for home appliances, decor and lifestyle electronics, designed for clean, product-focused browsing. Built with the Next.js App Router and deployed on Vercel.',
          imageUrl: '/images/projects/black-decor.png',
          link: 'https://blackdecor.vercel.app',
        },
        {
          title: 'PhrasePerfect',
          description:
            'AI-powered paraphraser and writing assistant that improves grammar, rewrites sentences and offers real-time suggestions. Built with React and JavaScript.',
          imageUrl: '/images/projects/phraseperfect.png',
          link: 'https://kshitijduaphraseperfect.vercel.app',
        },
        {
          title: 'The Shading Zone',
          description:
            'Website for a custom window covering company that designs, manufactures and installs blinds, shades, curtains and drapery for homes and commercial spaces. Built with Next.js, TypeScript and Tailwind CSS.',
          imageUrl: '/images/projects/shading-zone.svg',
          link: 'https://theshadingzone.vercel.app',
        },
        {
          title: 'IQ Homes',
          description:
            'Smart home design and installation company serving the Greater Toronto Area, covering smart locks, cameras, lighting, climate and whole-home audio. Built with plain HTML, CSS and JavaScript.',
          imageUrl: '/images/projects/iq-homes.png',
          link: 'https://iqhomes.vercel.app',
        },
        {
          title: 'IQ Homes Dashboard',
          description:
            'A smart home dashboard I built for my IQ Homes business, so clients can control their whole home in one place. Nova, its Alexa-style voice assistant, handles commands like "Hey Nova, dim the living room", and every open screen updates instantly. Includes scenes, timers, a 3D floor plan and live energy pricing. Built with React, TypeScript, Node.js, Socket.io and PostgreSQL.',
          imageUrl: '/images/projects/nova-smart-home.png',
          link: '',
        },
        {
          title: 'Lifeline',
          description:
            'A CPR practice coach that reads your compression rhythm from taps and tells you to go faster, slower or hold steady, with a particle heart that beats with every push. Built with HTML Canvas and the Web Audio API.',
          imageUrl: '/images/projects/lifeline.svg',
          link: '/concepts/lifeline.html',
        },
        {
          title: 'Echosight',
          description:
            'Turns a live camera feed into sound so people with vision loss can hear the shape of what is in front of them: height becomes pitch and edges become volume. Runs entirely on the device. Built with HTML Canvas, the camera API and the Web Audio API.',
          imageUrl: '/images/projects/echosight.svg',
          link: '/concepts/echosight.html',
        },
      ],
    },
  },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
      'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
      'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn',
      'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
    ],
    customTheme: {
      primary: '#4ade80',
      secondary: '#0ea5e9',
      accent: '#facc15',
      neutral: '#1f2937',
      'base-100': '#ffffff',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
    },
  },
  pageMetadata: {
    title: 'Kshitij Dua | Portfolio',
    description:
      "Hi, I'm Kshitij Dua, a full-stack developer building web apps, e-commerce sites and business websites with React and Next.js.",
    imageURL: 'https://avatars.githubusercontent.com/u/134516716?v=4',
  },
  footer: '© 2026 Kshitij Dua. All rights reserved. | Built with ❤️ using React and Vite.',
  enablePWA: true,
};

export default CONFIG;
