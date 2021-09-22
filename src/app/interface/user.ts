import {UserRole} from "../enums/user-role";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: number;
  role: UserRole;
}
