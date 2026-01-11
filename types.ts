
export type TimelineCategory = 'All' | 'Education' | 'Work' | 'Projects';

export interface TimelineItem {
  id: string;
  category: TimelineCategory;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bulletPoints: string[];
  icon: React.ReactNode;
  link?: string;
  projects?: { name: string; link: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
}
