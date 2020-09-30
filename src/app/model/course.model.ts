import { Degree } from './degree.model';

export class Course {

  constructor(
    private name: string,
    private duration: number,
    // private courses: Course[], --- The instructions stipulates that there should be one of more courses that is part of this degree (Which I think it was a mistake and meant for the degree object)
    private degree: Degree
  ){}

  getName(): string {
    return this.name;
  }

  getDuration(): number {
    return this.duration;
  }

  getDegree(): Degree {
    return this.degree;
  }

}
