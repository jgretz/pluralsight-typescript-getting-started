import { Person } from "./person";

export class Player implements Person {
  name: string;
  age?: number;

  constructor() {
    this.name = "";
  }

  formatName() {
    return this.name.toUpperCase();
  }
}
