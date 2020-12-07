export interface CourseData {
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  topRated: boolean;
}

export type Course = { id: number } & CourseData
