import { BaseModel } from './base.model';

export class Person extends BaseModel {

  protected firstName: string;

  constructor(
    id: string,
    protected forenames: string,
    protected surname: string,
    protected email: string,
    protected dateOfBirth: number) {
      super(id);

      if (forenames.indexOf(' ') !== -1) {
        this.firstName = forenames.substr(0, forenames.indexOf(' '));
      } else {
        this.firstName = forenames;
      }

  }

  getForenames(): string {
    return this.forenames;
  }

  getSurname(): string {
    return this.surname;
  }

  getEmail(): string {
    return this.email;
  }

  getDateOfBirth(): number {
    return this.dateOfBirth;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getFullName(): string {
    return this.forenames + ' ' + this.surname;
  }

}
