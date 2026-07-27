export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  icon: string;
  color: string;
  level: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  status: 'Completed' | 'In Progress';
  tags: string[];
}

export interface QuickFact {
  id: string;
  title: string;
  value: string;
  subText: string;
  icon: string;
  accentColor: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  glowColor: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
