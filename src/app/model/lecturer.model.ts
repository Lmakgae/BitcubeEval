import { Degree } from './degree.model';
import { Person } from './person.model';

export class Lecturer extends Person {

  constructor(
    forenames: string,
    surname: string,
    email: string,
    dateOfBirth: string,
    private degrees: Degree[]) {
    super(forenames, surname, email, dateOfBirth);
  }

  getDegrees(): Degree[] {
    return this.degrees;
  }

}
