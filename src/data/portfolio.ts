import Code2 from 'lucide-react/dist/esm/icons/code-2.js';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone.js';
import Globe from 'lucide-react/dist/esm/icons/globe.js';
import Cpu from 'lucide-react/dist/esm/icons/cpu.js';
import Wifi from 'lucide-react/dist/esm/icons/wifi.js';
import Server from 'lucide-react/dist/esm/icons/server.js';
import Database from 'lucide-react/dist/esm/icons/database.js';
import Layout from 'lucide-react/dist/esm/icons/panels-top-left.js';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.js';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb.js';

export const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '1', label: 'National Robotics Win' },
  { value: 'WRO', label: '2022 Germany, 2025 Singapore' },
  { value: 'RiSE', label: 'Competition 2021 · 1st' },
];

export const skills = [
  { name: 'Full Stack Web Dev', icon: Globe, level: 90 },
  { name: 'Full Stack App Dev', icon: Smartphone, level: 85 },
  { name: 'Computer Programming', icon: Code2, level: 88 },
  { name: 'LEGO Robotics', icon: Cpu, level: 100 },
  { name: 'IoT', icon: Wifi, level: 90 },
  { name: 'Database Management', icon: Database, level: 65 },
  { name: 'Arduino', icon: Server, level: 90 },
  { name: 'Computer Networking', icon: Database, level: 78 },
  { name: 'System Design', icon: Layout, level: 70 },
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
    title: 'Melora',
    description: 'Mobile app group project (2022)—a Shazam-like experience that lets users discover music by listening and download it directly to their devices.',
    tech: ['Mobile', 'Java', 'Android'],
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Career Atlas',
    description: 'Web project for job seekers and employers. Helps job seekers find opportunities and employers find talent.',
    tech: ['CSS', 'HTML', 'TypeScript', 'Java'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Echo Bank AI',
    description: 'AI-powered website for the finance sector, built as part of studies to improve banking experience and reduce faulty transactions.',
    tech: ['AI', 'Web', 'HTML', 'CSS', 'TypeScript', 'Java'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'SiteTrack',
    description: 'Construction company management system for tracking projects, resources, and operations.',
    tech: ['Web', 'Database', 'Management System'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'LEGO Mindstorms EV3 — WRO 2025',
    description: 'Programmed LEGO Mindstorms EV3 robot for WRO 2025 RoboMission Junior at CSIR: sensor integration, pathfinding algorithms, and geometry-based navigation. Delivered competition-ready robot with 95% task success rate.',
    tech: ['LEGO Mindstorms', 'EV3', 'Robotics', 'Sensors', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Interactive Website (CSIR)',
    description: 'Developed an interactive website during the CSIR internship, built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
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
    institution: 'Kwame Nkrumah University of Science and Technology',
    year: '2022 - 2026',
    status: 'Final Year Student',
  },
];

export const contact = {
  email: 'ohenebantim14@gmail.com',
  phone: '+233 25 631 8601',
  location: 'Accra, Ghana',
  linkedin: 'https://www.linkedin.com/in/oheneba-ntim-595700230',
};

export const technologies = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'HTML',
  'CSS',
  'MySQL',
  'Android Studio',
  'React Native',
  'React.js',
  'TypeScript',
  'LEGO Mindstorms',
  'Bricklink Studio',
  'Scratch',
  'Git',
  'SQL',
  'CAD',
  'Figma',
  'UI/UX Design',
  'Slack',
  'GitHub',
  'VS Code',
  'Render',
  'Mongodb',
  'PostgreSQL',
  'Next.js',
  'Cisco Packet Tracer',
  'Node.js',
  'Express.js',
  'Supabase',
  'MongoDB',
  'Tinkercad',
  'Raspberry Pi',
  'Pybricks',
  'Packet Tracer',
  'Arduino',
  
];
