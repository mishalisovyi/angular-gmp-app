import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor(data: UserInterface) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
