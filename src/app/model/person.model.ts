export class Person {

  protected firstName: string;

  constructor(
    protected forenames: string,
    protected surname: string,
    protected email: string,
    protected dateOfBirth: string) {

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

  getDateOfBirth(): string {
    return this.dateOfBirth;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getFullName(): string {
    return this.forenames + ' ' + this.surname;
  }

}
