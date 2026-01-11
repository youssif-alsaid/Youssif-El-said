
import React from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Settings,
  Flame
} from 'lucide-react';
import { TimelineItem, Project, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    name: 'Frontend Development',
    description: 'Expertise in React, JavaScript, HTML, CSS, and Tailwind for creating modern, responsive, and interactive user interfaces.',
    progress: 95,
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: 'UI / UX Design',
    description: 'Strong understanding of user experience and interface design, focusing on clarity, usability, and visual harmony.',
    progress: 88,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: 'Performance & Optimization',
    description: 'Ensuring smooth performance, optimized load times, and clean, scalable front-end architecture.',
    progress: 85,
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: 'Team Collaboration',
    description: 'Experienced in working with teams using GitHub, Trello, and ClickUp for organized workflow and smooth communication.',
    progress: 92,
    icon: <Users className="w-5 h-5" />,
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    category: 'Education',
    date: '2023 - Present',
    title: 'Faculty of Computers & Information',
    subtitle: 'Suez Canal University',
    description: 'Currently pursuing my Bachelor\'s degree in Computer Science, focusing on web development and modern frameworks like React and Laravel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    bulletPoints: [
      'Top 5% in Front-End track',
      'Completed Creativa web development course',
      'Built multiple academic web projects'
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    projects: [{ name: 'Dr Amira Khattap', link: '#' }]
  },
  {
    id: '2',
    category: 'Work',
    date: '2024 - Present',
    title: 'Front-End Developer',
    subtitle: 'ROS Tech',
    description: 'Working as a front-end developer, building modern and responsive web applications using React, Tailwind CSS, and Bootstrap. Focused on user experience, clean design, and code scalability.',
    tags: ['React', 'Tailwind CSS', 'Bootstrap', 'UI/UX'],
    bulletPoints: [
      'Delivered multiple live projects for clients',
      'Improved UI performance by 40%',
      'Collaborated using Trello & GitHub'
    ],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: '3',
    category: 'Education',
    date: 'March 2025',
    title: 'Creativa Web Development Courses',
    subtitle: 'Creativa, Ismailia',
    description: 'Completed intensive front-end and back-end courses to strengthen web development skills using React and Laravel.',
    tags: ['React', 'Laravel', 'JavaScript'],
    bulletPoints: [
      'Front-End Certificate',
      'Full-Stack Certificate'
    ],
    icon: <Settings className="w-6 h-6" />,
  },
  {
    id: '4',
    category: 'Projects',
    date: '2025',
    title: 'Projects by ROS Tech',
    subtitle: 'ROS Tech',
    description: 'A collection of projects and educational platforms developed with modern front-end technologies, focusing on responsive design, user experience, and interactive features.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind'],
    bulletPoints: [],
    icon: <Rocket className="w-6 h-6" />,
    projects: [
      { name: 'Darsely Educational Platform', link: '#' },
      { name: 'IG-Level Educational Platform', link: '#' },
      { name: 'El3abqary Educational Platform', link: '#' },
      { name: 'Mr Mahmoud Educational Platform', link: '#' }
    ]
  },
  {
    id: '5',
    category: 'Work',
    date: '2023 - Present',
    title: 'Freelance Front-End Developer',
    subtitle: 'Independent',
    description: 'Collaborated with clients to design and build responsive portfolio and business websites. Specialized in clean UI, smooth transitions, and scalable front-end structures.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'React', 'UI Design'],
    bulletPoints: [
      '9+ satisfied clients',
      '5-star ratings on freelance projects',
      'Delivered projects before deadline'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    projects: [{ name: 'Dr Amira Khattap', link: '#' }]
  },
  {
    id: '6',
    category: 'Projects',
    date: '2025 - Ongoing',
    title: 'Continuous Learning',
    subtitle: 'Self Development',
    description: 'Constantly improving my skills by exploring new front-end frameworks, back-end technologies, and UI trends to stay updated with the fast-moving tech world.',
    tags: ['Next.js', 'PHP', 'Laravel', 'API Integration'],
    bulletPoints: [
      'Building personal full-stack projects',
      'Exploring AI-integrated UIs',
      'Sharing knowledge with other devs'
    ],
    icon: <Flame className="w-6 h-6" />,
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'First Project (UI Only)',
    description: 'Practiced UI design by replicating a simple educational platform layout.',
    imageUrl: 'https://picsum.photos/seed/p1/600/400',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p2',
    title: 'Second Project (UI Only)',
    description: 'Practiced UI design by replicating a simple educational platform layout.',
    imageUrl: 'https://picsum.photos/seed/p2/600/400',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p3',
    title: 'Dice Game',
    description: 'A simple interactive dice game demonstrating fundamental JavaScript logic, DOM manipulation, and game mechanics.',
    imageUrl: 'https://picsum.photos/seed/p3/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p4',
    title: 'Darsely Educational Platform',
    description: 'Front-end development for a platform providing online lessons, interactive exams, and progress tracking for students.',
    imageUrl: 'https://picsum.photos/seed/p4/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p5',
    title: 'El3abqary Educational Platform',
    description: 'An interactive learning platform with responsive layout, smooth transitions, and modern web standards implementation.',
    imageUrl: 'https://picsum.photos/seed/p5/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p6',
    title: 'IG-Level Platform',
    description: 'Educational platform for British curriculum students, offering interactive lessons, quizzes, and dashboards to track student performance.',
    imageUrl: 'https://picsum.photos/seed/p6/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 'p7',
    title: 'Mr Mahmoud Educational Platform',
    description: 'A responsive website with multi-page navigation, interactive elements, and animations designed for educational purposes.',
    imageUrl: 'https://picsum.photos/seed/p7/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 'p8',
    title: 'Dr Amira Platform',
    description: 'Educational platform designed for interactive learning and student engagement, featuring responsive layout and smooth UI interactions.',
    imageUrl: 'https://picsum.photos/seed/p8/600/400',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    link: '#'
  }
];
