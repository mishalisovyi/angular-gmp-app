export interface CourseData {
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export type Course = { id: number } & CourseData
