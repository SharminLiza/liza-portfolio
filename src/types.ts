export interface Project {
  id: string;
  name: string;
  title: string;
  category: 'Large Language Model' | 'Software & Development' | 'Software Testing' | 'AI Automation' | 'Fullstack';
  year: string;
  shortDesc: string;
  description: string;
  problem: string;
  solution: string;
  novelty?: string;
  results: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  hasPdfSpecial?: boolean;
  groupImages?: string[];
  pdfPages?: string[];
  thumbnail: string;
  images: string[]; 
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  status: 'In review' | 'In Progress' | 'Completed';
  year: string;
  summary: string;
  tags: string[];
  pdfPagesCount: number;
  authors: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialUrl?: string;
  badgeColor?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface AcademicMilestone {
  degree: string;
  institution: string;
  year: string;
  detailLabel: string;
  detailValue: string;
}
