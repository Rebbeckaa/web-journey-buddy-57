export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  duration: string;
  image: string;
  accentColor: string;
  accentBg: string;
  overview: string;
  challenge: string;
  solution: string;
  process: string[];
  role: string;
  team?: string;
  focus?: string;
  prototypeLink?: string;
}
