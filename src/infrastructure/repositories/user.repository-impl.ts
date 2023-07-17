import { UserRepositoryInterface } from "../../domain/repositories/user.repository";
import { InMemoryDatabase } from "../databases/in-memory.database";
import { User } from "../../domain/entities/user";

export class UserRepositoryImpl implements UserRepositoryInterface {
  private database: InMemoryDatabase<User>;

  constructor() {
    this.database = new InMemoryDatabase<User>();
  }

  getById(id: string): User {
    const user = this.database.getById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  add(user: User): void {
    this.database.add(user);
  }
}
