export class BaseModel {
  constructor(
    protected id: string
  ) {}

  getId(): string {
    return this.id;
  }
}
