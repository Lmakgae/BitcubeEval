import { Degree } from './degree.model';
import { Person } from './person.model';

export class Student extends Person{

  constructor(
    forenames: string,
    surname: string,
    email: string,
    dateOfBirth: string,
    private degree: Degree) {
    super(forenames, surname, email, dateOfBirth);
  }

  getDegree(): Degree {
    return this.degree;
  }

}
