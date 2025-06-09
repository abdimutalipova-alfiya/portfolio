export interface NavItem {
  name: string
  href: string
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