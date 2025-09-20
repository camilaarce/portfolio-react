export interface TimelineItemData {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  skills?: string[];
}

export interface PublicationData {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
