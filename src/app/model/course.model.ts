import { BaseModel } from './base.model';

export class Course extends BaseModel {

  constructor(
    id: string,
    private name: string,
    private duration: number,
    // private courses: Course[], --- The instructions stipulates that there should be one of more courses that is part of this degree (Which I think it was a mistake and meant for the degree object)
    private degreeID: string){
      super(id);
  }

  getName(): string {
    return this.name;
  }

  getDuration(): number {
    return this.duration;
  }

  getDegreeID(): string {
    return this.degreeID;
  }

}
