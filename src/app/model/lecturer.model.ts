import { Person } from './person.model';

export class Lecturer extends Person {

  private degreeIDs: string[];

  constructor(
    id: string,
    forenames: string,
    surname: string,
    email: string,
    dateOfBirth: number,
    degreeIDs?: string[]) {
    super(id, forenames, surname, email, dateOfBirth);
    this.degreeIDs = degreeIDs;
  }

  getDegreeIDs(): string[] {
    return this.degreeIDs;
  }

}
