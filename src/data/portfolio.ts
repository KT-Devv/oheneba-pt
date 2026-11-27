import Code2 from 'lucide-react/dist/esm/icons/code-2.js';
import Globe from 'lucide-react/dist/esm/icons/globe.js';
import Cpu from 'lucide-react/dist/esm/icons/cpu.js';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.js';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb.js';

export const stats = [
  { value: '2', label: 'WRO World Finals · Germany 2022, Singapore 2025' },
  { value: '1st', label: 'RiSE National Robotics Competition 2021' },
  { value: '8+', label: 'Projects built' },
  { value: 'NSS', label: 'National Service · CSIR-INSTI' },
];

export const skillGroups = [
  {
    title: 'Web & Apps',
    icon: Globe,
    skills: ['Full-Stack Web Development', 'Full-Stack App Development', 'Database Management', 'System Design'],
  },
  {
    title: 'Robotics & IoT',
    icon: Cpu,
    skills: ['LEGO Robotics', 'Arduino', 'Internet of Things (IoT)', 'Sensors & Automation'],
  },
  {
    title: 'Foundations',
    icon: Code2,
    skills: ['Computer Programming', 'Computer Networking', 'STEM Tutoring'],
  },
];

export const otherInterests = [
  'STEM Education & Outreach',
  'Robotics Tutoring',
  'Music',
  'Mentoring',
  'Gaming',
  'Traveling',
  'Formula 1',
  'Photography',
  'Driving',
  'Technology Trends',
];

export const services = [
  {
    title: 'Full-Stack Development',
    description: 'Web and mobile applications with modern tech stacks',
    icon: Code2,
  },
  {
    title: 'Robotics & IoT',
    description: 'LEGO robotics, Arduino projects, and IoT systems',
    icon: Cpu,
  },
  {
    title: 'STEM Tutoring',
    description: 'Programming and robotics education for students',
    icon: BookOpen,
  },
  {
    title: 'Tech Consulting',
    description: 'System design and technology strategy advice',
    icon: Lightbulb,
  },
];

export const projects = [
  {
    title: 'Research & Robotics at CSIR-INSTI',
    description: 'Ongoing national service work at CSIR-INSTI, contributing to research projects and robotics projects.',
    tech: ['Research', 'Robotics', 'National Service'],
    image: '/images/csir-insti.jpg',
  },
  {
    title: 'Melora',
    description: 'Mobile app group project (2022)—a Shazam-like experience that lets users discover music by listening and download it directly to their devices.',
    tech: ['Mobile', 'Java', 'Android'],
    image: '/images/melora.jpg',
  },
  {
    title: 'Career Atlas',
    description: 'Web project for job seekers and employers. Helps job seekers find opportunities and employers find talent.',
    tech: ['CSS', 'HTML', 'TypeScript', 'Java'],
    image: '/images/career-atlas.jpg',
  },
  {
    title: 'Echo Bank AI',
    description: 'AI-powered website for the finance sector, built as part of studies to improve banking experience and reduce faulty transactions.',
    tech: ['AI', 'Web', 'HTML', 'CSS', 'TypeScript', 'Java'],
    image: '/images/echo-bank.jpg',
  },
  {
    title: 'SiteTrack',
    description: 'Construction company management system for tracking projects, resources, and operations.',
    tech: ['Web', 'Database', 'Management System'],
    image: '/images/sitetrack.jpg',
  },
  {
    title: 'LEGO Mindstorms EV3 — WRO 2025',
    description: 'Programmed LEGO Mindstorms EV3 robot for WRO 2025 RoboMission Junior at CSIR: sensor integration, pathfinding algorithms, and geometry-based navigation. Delivered competition-ready robot with 95% task success rate.',
    tech: ['LEGO Mindstorms', 'EV3', 'Robotics', 'Sensors', 'Algorithms'],
    image: '/images/wro-2025.jpg',
  },
  {
    title: 'RiSE Robotics Competition 2021',
    description: '1st Place and trophy in the Robotics-inspired Science Education (RiSE) competition by Ghana Robotics Academy Foundation—National Robotics Competition 2021.',
    tech: ['Robotics', 'Competition', 'STEM'],
    // local image optimized into public/images/robot.* by the optimize-images script
    image: '/images/robot.jpg',
  },
  {
    title: 'Snake Game',
    description: 'Classic Snake game built with Python and Pygame. Features customizable background, Easy/Medium/Hard difficulty levels, special food items, sound effects, and high score tracking.',
    tech: ['Python', 'Pygame'],
    image: '/images/snake.jpg',
    url: 'https://github.com/KT-Devv/Snake_game',
  },
];

export const education = [
     {
    degree: 'High School Diploma',
    course: 'General Science',
    institution: 'Our Lady of Grace Senior High School',
    year: '2019-2022',
    status: 'Graduated',
  },
    {
    degree: 'BSc Computer Science',
    course: 'Computer Science',
    institution: 'Kwame Nkrumah University of Science and Technology',
    year: '2022 - 2026',
    status: 'Graduated',
  },
];

export const experience = [
  {
    role: 'National Service Personnel',
    organization: 'CSIR-INSTI',
    year: '2026 - Present',
    status: 'Current',
    description: 'Contributing to research projects and robotics projects.',
  },
];

export const contact = {
  email: 'ohenebantim14@gmail.com',
  phone: '+233 25 631 8601',
  location: 'Accra, Ghana',
  linkedin: 'https://www.linkedin.com/in/oheneba-ntim-595700230',
};

export const technologies = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'SQL',
  'PostgreSQL',
  'Android Studio',
  'Arduino',
  'Raspberry Pi',
  'LEGO Mindstorms',
  'Git & GitHub',
  'Figma',
];
