export interface NavItem {
  name: string
  href: string
}

export interface Hobby {
  title: string
  description: string
  icon: string
}

export interface Reason {
  title: string
  description: string
  icon: React.ReactNode
}

export type SectionId = 'home' | 'about' | 'internship' | 'projects'


export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  link?: string;
}