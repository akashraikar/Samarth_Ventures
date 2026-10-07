export type NavPage =
  | 'home'
  | 'course-advanced'
  | 'course-intermediate'
  | 'course-reverse-engineering'
  | 'course-digital-artisan'
  | 'our-story'
  | 'why-choose-us'
  | 'electroforming'
  | 'get-in-touch';

export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  summary: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  pageKey: NavPage;
  title: string;
  subtitle: string;
  level: 'Advanced' | 'Intermediate' | 'Professional & Industry Pro' | 'Masterclass';
  duration: string;
  format: string;
  software: string[];
  prerequisites: string;
  certification: string;
  heroImage: string;
  overview: string;
  coreHighlights: string[];
  modules: CourseModule[];
  careerOutcomes: string[];
  capstoneProject: string;
  batchSchedule: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  experienceLevel: 'beginner' | 'intermediate' | 'professional' | 'business-owner';
  preferredMode: 'classroom' | 'hybrid' | 'corporate-training';
  message: string;
}
