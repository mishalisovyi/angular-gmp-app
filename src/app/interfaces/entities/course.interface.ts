import { Author } from './author.interface';

export interface CourseData {
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors?: Author[];
}

export type Course = { id: number } & CourseData
