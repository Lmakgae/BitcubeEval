import { Person } from './person.model';

export class Student extends Person{

  constructor(
    id: string,
    forenames: string,
    surname: string,
    email: string,
    dateOfBirth: number,
    private degreeID: string) {
    super(id, forenames, surname, email, dateOfBirth);
  }

  getDegreeID(): string {
    return this.degreeID;
  }

}
