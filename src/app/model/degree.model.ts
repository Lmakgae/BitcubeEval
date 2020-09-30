import { Course } from './course.model';
import { Lecturer } from './lecturer.model';

export class Degree {

  constructor(
    private name: string,
    private duration: number,
    private lecturer: Lecturer,
    private courses: Course[],
  ){}

  getName(): string {
    return this.name;
  }

  getDuration(): number {
    return this.duration;
  }

  getCourses(): Course[]{
    return this.courses;
  }

  getLecturer(): Lecturer {
    return this.lecturer;
  }

}
