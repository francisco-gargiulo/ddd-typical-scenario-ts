import { User } from "../entities/user";

export interface UserRepositoryInterface {
  getById(id: string): User;
  add(user: User): void;
}
