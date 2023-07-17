import { UserService } from "../domain/services/user.service";
import { User } from "../domain/entities/user";

export class UserApplicationService {
  constructor(private userService: UserService) {}

  getUser(id: string): User {
    return this.userService.getUser(id);
  }

  createUser(user: User): void {
    this.userService.createUser(user);
  }
}
