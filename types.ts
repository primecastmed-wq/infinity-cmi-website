
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
}
