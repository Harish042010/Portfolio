export type ProjectCategory = 'All' | 'Full Stack' | 'AI & IoT' | 'Mobile & Tools';

export type Project = {
  id: string;
  name: string;
  category: 'Full Stack' | 'AI & IoT' | 'Mobile & Tools';
  status: string;
  blurb: string;
  tags: string[];
  href?: string;
  github: string;
  featured?: boolean;
  highlights: string[];
  metrics: string;
  architecture?: string;
  year?: string;
};

export const EMAIL = 'harishr0007r@gmail.com';
export const GITHUB_URL = 'https://github.com/Harish042010';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/harish-h-62aa48327';
export const INSTAGRAM_URL = 'https://www.instagram.com/harijxse?evlk=MTc1bWYyaXRyemQyMw==';
export const LOCATION = 'Krishnagiri / Coimbatore, Tamil Nadu, India';

export const PROJECTS: Project[] = [
  {
    id: 'zenxora',
    name: 'ZenXora Platform',
    category: 'Full Stack',
    status: 'In development',
    featured: true,
    year: '2026',
    blurb:
      'A smart placement tracker that empowers engineering students to secure tier-1 tech careers. Features an intelligent ATS resume analyzer with instant keyword matching, scoring telemetry, and an integrated company hiring intelligence directory.',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'ATS Algorithm', 'TailwindCSS'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Built automated resume scoring algorithm matching contextual job description criteria',
      'Engineered company intelligence engine researching campus hiring patterns and past CTCs',
      'Designed end-to-end multi-stage recruitment pipeline with candidate notification triggers',
    ],
    metrics: '95%+ Parser Accuracy · < 0.4s ATS Evaluation',
    architecture:
      'Client-side React 18 UI with optimistic state updates → Node.js/Express REST micro-service → MongoDB document cluster with indexed keyword vector matching.',
  },
  {
    id: 'arg-academy',
    name: 'ARG Academy Portal',
    category: 'Full Stack',
    status: 'Shipped & Live',
    featured: true,
    year: '2025 – 2026',
    blurb:
      'The official web platform for a renowned school with a 20+ year legacy. Delivers instant parent-student notices, admission enquiry workflows, faculty showcases, and a mobile-responsive modern layout.',
    tags: ['React', 'Node.js', 'CSS Modules', 'Express', 'SEO Optimized', 'Lighthouse 95+'],
    href: 'https://www.argacad.in',
    github: 'https://github.com/Harish042010',
    highlights: [
      'Production website serving hundreds of students, teachers, and parents daily',
      'Performance audit achieved 95+ score on Google Lighthouse with sub-second LCP',
      'Implemented secure contact submission and dynamic academic announcement broadcasts',
    ],
    metrics: 'Live in Production · 20+ Year Legacy Institute · 95+ Lighthouse',
    architecture:
      'Fast client-side React rendering paired with Node.js API handlers, Cloudflare caching, and optimized media assets for rural/mobile bandwidth.',
  },
  {
    id: 'factorymind-ai',
    name: 'FactoryMind AI',
    category: 'AI & IoT',
    status: 'Team ZenX Prototype',
    featured: true,
    year: '2026',
    blurb:
      'Industrial IoT predictive maintenance system for CNC lathes. Detects micro-anomalies, bearing wear, and mechanical degradation in real time using high-frequency sensor streams before catastrophic failure occurs.',
    tags: ['AI/ML', 'IoT', 'Python', 'Sensor Fusion', 'Time-Series Data', 'Anomaly Detection'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Real-time vibration, acoustic, and temperature telemetry ingestion pipeline',
      'Predictive model forecasting tool wear progression and downtime alerts',
      'Developed as a flagship prototype for Team ZenX industrial innovation showcase',
    ],
    metrics: 'Predictive Lathe Diagnostic Prototype · Real-time Telemetry',
    architecture:
      'Embedded vibration/thermal sensors → Edge microcontroller → Python MQTT/WebSocket telemetry ingestion → Scikit-learn anomaly model → Interactive dashboard.',
  },
  {
    id: 'solarsync',
    name: 'SolarSync Enterprise',
    category: 'Full Stack',
    status: 'Shipped',
    featured: false,
    year: '2025',
    blurb:
      'Enterprise renewable energy monitoring web application built with a robust Spring Boot microservice backend, React client interface, and role-based access control with JWT authentication.',
    tags: ['Spring Boot', 'React', 'JWT', 'REST APIs', 'PostgreSQL', 'Role-Based Auth'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Strict role-based access management for field technicians, managers, and system admins',
      'Real-time solar panel output, inverter telemetry, and battery reserve visualization',
      'Designed PostgreSQL normalized relational schema for hourly energy generation logs',
    ],
    metrics: 'JWT Secured · Microservice Backend · Multi-Role Security',
    architecture:
      'React frontend communicating with Spring Boot REST API layer with Spring Security & JWT token verification, backed by PostgreSQL persistence.',
  },
  {
    id: 'schoolconnect',
    name: 'SchoolConnect Mobile',
    category: 'Mobile & Tools',
    status: 'In development',
    featured: false,
    year: '2026',
    blurb:
      'A cross-platform mobile communication and attendance app designed for educational institutions to seamlessly bridge classroom updates, digital attendance, and parent-teacher messaging.',
    tags: ['React Native', 'Mobile UI', 'Cloud Storage', 'Cross-Platform', 'Push Notifications'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Rapid attendance logger supporting batch student roll calls and instant parent SMS/push',
      'Modern, accessible mobile UX with offline-first local cache synchronization',
      'Engineered clean state management architecture using modern mobile patterns',
    ],
    metrics: 'Cross-platform Mobile Architecture · Offline Sync',
    architecture:
      'React Native client with asynchronous local storage cache, synchronized to a cloud backend via REST endpoints.',
  },
  {
    id: 'smart-career-ai',
    name: 'Smart Career Guidance AI',
    category: 'AI & IoT',
    status: 'Ongoing',
    featured: false,
    year: '2025',
    blurb:
      'Intelligent career counseling recommendation system that maps higher secondary and undergraduate students to tailored university programs and tech specializations using psychometric skillset vectors.',
    tags: ['Machine Learning', 'Recommendation Engine', 'Flask API', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Vector similarity matching students\' aptitude and technical interests to emerging industry roles',
      'Comprehensive database of universities, curriculum rankings, and career path trajectories',
      'Lightweight Flask REST endpoint for quick embedding in high school guidance portals',
    ],
    metrics: 'Intelligent Career Pathway Model · Cosine Vector Matching',
    architecture:
      'Flask micro-API serving Scikit-Learn vector similarity models with JSON parameter endpoints.',
  },
  {
    id: 'iot-smart-helmet',
    name: 'IoT Smart Helmet',
    category: 'AI & IoT',
    status: 'Completed (2025)',
    featured: false,
    year: '2025',
    blurb:
      'Hardware rider safety and anti-DUI protection system where two-wheeler ignition is wirelessly locked until helmet strap contact is confirmed and breathalyzer alcohol threshold is verified zero.',
    tags: ['Arduino', 'IoT Sensors', 'RF Communication', 'Embedded C', 'Hardware Prototype'],
    github: 'https://github.com/Harish042010',
    highlights: [
      'Integrated pressure sensors, MQ-3 alcohol sensor, and RF wireless transmitter circuit',
      'Successfully defended working hardware prototype integrated with physical bike ignition relay',
      'Competed as a finalist at state-level innovation competitions (Uyir Hackathon)',
    ],
    metrics: 'Hardware Safety Prototype · 2025 Finalist',
    architecture:
      'Embedded Arduino Nano onboard helmet with RF transmitter communicating with motorcycle base station ignition cutoff relay.',
  },
];

export type Role = {
  period: string;
  title: string;
  organization: string;
  type: 'Work';
  badge: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

export const ROLES_DETAILED: Role[] = [
  {
    period: 'Oct 2025 – Jul 2026',
    title: 'Full Stack Developer',
    organization: 'NuetreX.io',
    type: 'Work',
    badge: 'Startup Developer',
    summary:
      'Architected, developed, and maintained scalable frontend and backend web applications for a fast-paced technology startup.',
    bullets: [
      'Led 2–3 end-to-end web projects, owning UI design, frontend architecture, and deployment processes',
      'Designed and integrated REST APIs, database management systems, and third-party services',
      'Practiced clean architecture, Git workflow, and component reusability across team projects',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'System Architecture'],
  },
  {
    period: 'May – Jun 2026',
    title: 'Web Development Intern',
    organization: 'Inamigos Foundation',
    type: 'Work',
    badge: 'Social Impact NGO',
    summary:
      'Developed a fully responsive NGO awareness web platform and instituted UX evaluation methodologies.',
    bullets: [
      'Engineered responsive web interfaces adapted for mobile, tablet, and desktop viewports',
      'Documented and delivered detailed UI/UX improvement audits with annotated visual guides',
      'Collaborated closely with design team to improve user accessibility and donor engagement',
    ],
    skills: ['HTML5/CSS3', 'JavaScript', 'Responsive Design', 'UI/UX Audit', 'Accessibility'],
  },
];

export type Education = {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade: string;
  highlights?: string[];
};

export const EDUCATION_DATA: Education[] = [
  {
    period: '2024 – 2028',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Sri Krishna College of Engineering & Technology (SKCET)',
    location: 'Coimbatore',
    grade: 'CGPA: 7.80 / 10',
    highlights: [
      'Currently in third year — focusing on ML, data structures, system design & web engineering',
      'Active leader in technical campus clubs, coding bootcamps, and competitive hackathons',
      'Coordinating department tech symposiums and student innovation initiatives',
    ],
  },
  {
    period: '2024',
    degree: 'Senior Secondary (XII) – HSC',
    institution: 'Velankanni Matriculation Higher Secondary School',
    location: 'Tamil Nadu',
    grade: '90%',
  },
  {
    period: '2022',
    degree: 'Secondary (X) – SSLC',
    institution: 'Gonzaga Matric Higher Secondary School',
    location: 'Tamil Nadu',
    grade: '90%',
  },
];

export const ROW1 = [
  'React.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Next.js Concepts',
  'Tailwind CSS',
  'HTML5 & Modern CSS',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'RESTful APIs',
  'System Architecture',
];

export const ROW2 = [
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Python',
  'Machine Learning',
  'NLP',
  'Arduino & IoT',
  'Git & GitHub',
  'Postman',
  'Docker Basics',
  'Spring Boot',
];

export type SkillCategory = {
  name: string;
  badge: string;
  description: string;
  skills: { name: string; level: string; experience?: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Engineering',
    badge: 'Modern UI/UX',
    description: 'Building accessible, fast, component-driven client applications.',
    skills: [
      { name: 'React.js (18+)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & Modern CSS', level: 'Advanced' },
      { name: 'Responsive & Accessible Design', level: 'Advanced' },
    ],
  },
  {
    name: 'Backend & Systems',
    badge: 'Robust APIs',
    description: 'Scalable service architectures, authentication, and database schemas.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced' },
      { name: 'MongoDB / Mongoose', level: 'Advanced' },
      { name: 'RESTful API Architecture', level: 'Advanced' },
      { name: 'PostgreSQL & SQL', level: 'Intermediate' },
      { name: 'Spring Boot (Java)', level: 'Intermediate' },
      { name: 'JWT & Security', level: 'Advanced' },
    ],
  },
  {
    name: 'AI, ML & IoT Hardware',
    badge: 'Data & Sensors',
    description: 'Applied machine learning, NLP extraction, and embedded IoT systems.',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Natural Language Processing (NLP)', level: 'Intermediate' },
      { name: 'Scikit-Learn & ML Models', level: 'Intermediate' },
      { name: 'Arduino & Sensor Telemetry', level: 'Advanced' },
      { name: 'RF & Hardware Prototyping', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & Engineering Practices',
    badge: 'Dev Workflow',
    description: 'Version control, API testing, performance audits, and team leadership.',
    skills: [
      { name: 'Git & GitHub Workflow', level: 'Advanced' },
      { name: 'Postman & API Testing', level: 'Advanced' },
      { name: 'Lighthouse Performance Audit', level: 'Advanced' },
      { name: 'Vite & Bundlers', level: 'Advanced' },
      { name: 'Docker Fundamentals', level: 'Intermediate' },
      { name: 'Technical Team Leadership', level: 'Advanced' },
    ],
  },
];

export type Hackathon = {
  title: string;
  role: string;
  badge: string;
  description: string;
};

export const HACKS_DETAILED: Hackathon[] = [
  {
    title: 'HackZen\u201926',
    role: 'Main Student Coordinator',
    badge: 'Flagship Event Lead',
    description: 'Directed end-to-end logistics, problem statement formulation, and judge coordination for over 300+ participating student developers.',
  },
  {
    title: 'MSME Hackathon',
    role: 'Team Leader',
    badge: 'National Innovation Round',
    description: 'Spearheaded project ideation, architectural design, and prototype defense, advancing through all competitive rounds.',
  },
  {
    title: 'Uyir Hackathon 2025',
    role: 'Finalist',
    badge: 'State Finalist',
    description: 'Engineered an impactful safety IoT solution competing against top state-level engineering colleges.',
  },
  {
    title: 'Smart India Hackathon 2026',
    role: 'Cleared College Rounds',
    badge: 'College Qualifier',
    description: 'Selected as one of the premier project teams representing SKCET in national-level SIH internal evaluations.',
  },
];

export const CARD_COLORS = [
  'bg-butter/95',
  'bg-lilac/90',
  'bg-white',
];
