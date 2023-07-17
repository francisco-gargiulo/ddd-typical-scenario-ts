import { UserApplicationService } from "../../application/user.application.service";
import { User } from "../../domain/entities/user";

export class UserController {
  constructor(private userApplicationService: UserApplicationService) {}

  getUser(id: string): User {
    return this.userApplicationService.getUser(id);
  }

  createUser(id: string, username: string, password: string): void {
    const user = new User(id, username, password);
    this.userApplicationService.createUser(user);
  }
}
