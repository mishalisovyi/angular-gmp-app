import { CourseInterface } from '../interfaces/course.interface';

export class Course implements CourseInterface {
  public id: number;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;

  constructor(data: CourseInterface) {
    this.id = data.id;
    this.title = data.title;
    this.creationDate = data.creationDate;
    this.duration = data.duration;
    this.description = data.description;
  }
}
