import { EducationItem, QuickFact, SkillCategory, StrengthItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Awadhesh Pandit',
  greeting: "Hello, I'm",
  titles: [
    'Frontend Web Developer',
    'Student',
    'Video Editor',
    'Creative Designer'
  ],
  tagline: 'Crafting Modern Digital Experiences with Creativity & Code.',
  aboutText:
    'I am Awadhesh Pandit, a passionate student and Frontend Web Developer from Birgunj, Nepal. Alongside web development, I specialize in video editing and digital content creation. I enjoy building clean, responsive, and modern websites while continuously learning new technologies.',
  location: 'Birgunj, Nepal',
  institution: 'Birgunj Institute of Technology',
  profession: 'Student, Frontend Developer & Video Editor',
  passion: 'Digital Creation & Modern Web Design',
  phone: '9744362108',
  email: 'nottawadhesh45@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  codeSnippet: `// Awadhesh Pandit — Tech Stack & Mission
const developer = {
  name: 'Awadhesh Pandit',
  location: 'Birgunj, Nepal',
  education: 'BIT Birgunj (Computer Engineering)',
  coreSkills: ['React', 'JavaScript', 'CapCut', 'PHP', 'Tailwind'],
  status: 'Ready to build awesome web applications & edits',
  createExperience() {
    return "Creativity + Clean Code";
  }
};`
};

export const QUICK_INFO_CARDS = [
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'Birgunj, Nepal',
    subText: 'Province No. 2, Nepal',
    color: '#00BFFF',
    glowColor: 'rgba(0, 191, 255, 0.25)'
  },
  {
    icon: 'GraduationCap',
    label: 'Education',
    value: 'BIT Birgunj',
    subText: 'Diploma in Computer Engineering',
    color: '#7C3AED',
    glowColor: 'rgba(124, 58, 237, 0.25)'
  },
  {
    icon: 'Briefcase',
    label: 'Profession',
    value: 'Frontend Developer',
    subText: 'Student & Video Editor',
    color: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.25)'
  },
  {
    icon: 'Target',
    label: 'Passion',
    value: 'Digital Creation',
    subText: 'Modern Web Design & Video FX',
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.25)'
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: 'Completed',
    degree: '10th Grade (SEE)',
    institution: 'Jay Kisan Secondary School',
    location: 'Birgunj, Nepal',
    description: 'Graduated with strong foundations in science, mathematics, and computer fundamentals.',
    status: 'Completed',
    tags: ['Secondary Education', 'Science & Math', 'Computer Science']
  },
  {
    period: 'In Progress',
    degree: 'Diploma in Computer Engineering',
    institution: 'Birgunj Institute of Technology (BIT)',
    location: 'Birgunj, Nepal',
    description: 'Focusing on Software Engineering, Data Structures, Web Technology, Database Systems, and Hardware Architecture.',
    status: 'In Progress',
    tags: ['Computer Engineering', 'Web Development', 'DBMS', 'Algorithms']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'HTML', percentage: 95, icon: 'FileCode', color: '#E44D26', level: 'Expert' },
      { name: 'CSS', percentage: 90, icon: 'Palette', color: '#264DE4', level: 'Advanced' },
      { name: 'JavaScript', percentage: 88, icon: 'Code', color: '#F7DF1E', level: 'Advanced' },
      { name: 'React', percentage: 85, icon: 'Atom', color: '#61DAFB', level: 'Proficient' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    iconName: 'Server',
    skills: [
      { name: 'PHP', percentage: 80, icon: 'Server', color: '#777BB4', level: 'Proficient' },
      { name: 'PHP Frameworks', percentage: 75, icon: 'Cpu', color: '#8892BF', level: 'Intermediate' }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', percentage: 82, icon: 'Database', color: '#00758F', level: 'Proficient' },
      { name: 'MongoDB', percentage: 78, icon: 'Layers', color: '#47A248', level: 'Intermediate' },
      { name: 'MariaDB', percentage: 75, icon: 'HardDrive', color: '#003545', level: 'Intermediate' }
    ]
  },
  {
    id: 'design',
    name: 'Design Tools',
    iconName: 'Figma',
    skills: [
      { name: 'CapCut', percentage: 94, icon: 'Video', color: '#000000', level: 'Expert' },
      { name: 'Canva', percentage: 90, icon: 'Sparkles', color: '#00C4CC', level: 'Advanced' }
    ]
  },
  {
    id: 'other',
    name: 'Other Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Bootstrap', percentage: 88, icon: 'Box', color: '#7952B3', level: 'Advanced' },
      { name: 'Git', percentage: 82, icon: 'GitBranch', color: '#F05032', level: 'Proficient' },
      { name: 'GitHub', percentage: 85, icon: 'Github', color: '#FFFFFF', level: 'Proficient' },
      { name: 'Excel', percentage: 82, icon: 'FileSpreadsheet', color: '#107C41', level: 'Proficient' },
      { name: 'Python', percentage: 65, icon: 'Terminal', color: '#3776AB', level: 'Beginner' }
    ]
  }
];

export const CORE_STRENGTHS: StrengthItem[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Guiding projects with clarity, taking initiative in group engineering tasks, and mentoring peers in web basics.',
    icon: 'ShieldCheck',
    glowColor: '#00BFFF',
    tags: ['Team Direction', 'Initiative', 'Project Guidance']
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    description: 'Collaborating seamlessly with developers, video creators, and designers to deliver unified digital outcomes.',
    icon: 'Users',
    glowColor: '#7C3AED',
    tags: ['Cross-functional', 'Cooperation', 'Active Listener']
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Translating complex ideas into clear visual storyboards, code documentation, and concise client messages.',
    icon: 'MessageSquare',
    glowColor: '#00E5FF',
    tags: ['Technical Writing', 'Client Sync', 'Visual Storytelling']
  },
  {
    id: 'time-management',
    title: 'Time Management',
    description: 'Efficiently prioritizing engineering coursework, client video edits, and web coding projects under deadlines.',
    icon: 'Clock',
    glowColor: '#10B981',
    tags: ['Deadline Driven', 'Task Prioritization', 'Efficiency']
  }
];

export const QUICK_FACTS: QuickFact[] = [
  {
    id: 'fact-1',
    title: 'Lives in',
    value: 'Birgunj, Nepal',
    subText: 'Gateway to Nepal',
    icon: 'MapPin',
    accentColor: '#00BFFF'
  },
  {
    id: 'fact-2',
    title: 'Student',
    value: 'BIT Birgunj',
    subText: 'Diploma in Computer Engineering',
    icon: 'GraduationCap',
    accentColor: '#7C3AED'
  },
  {
    id: 'fact-3',
    title: 'Profession',
    value: 'Frontend Web Developer',
    subText: 'Building sleek responsive web interfaces',
    icon: 'Code2',
    accentColor: '#00E5FF'
  },
  {
    id: 'fact-4',
    title: 'Passion',
    value: 'Digital Creation & Video Editing',
    subText: 'Creating reels, YouTube edits & graphics',
    icon: 'Film',
    accentColor: '#EC4899'
  }
];
