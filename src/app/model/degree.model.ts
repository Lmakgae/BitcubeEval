import { BaseModel } from './base.model';

export class Degree extends BaseModel {

  constructor(
    id: string,
    private name: string,
    private duration: number,
    private lecturerID: string){
      super(id);
  }

  getName(): string {
    return this.name;
  }

  getDuration(): number {
    return this.duration;
  }

  getLecturerID(): string {
    return this.lecturerID;
  }

}
