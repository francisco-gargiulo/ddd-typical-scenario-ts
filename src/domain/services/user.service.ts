import { User } from "../entities/user";
import { UserRepositoryInterface } from "../repositories/user.repository";

export class UserService {
  constructor(private userRepository: UserRepositoryInterface) {}

  getUser(id: string): User {
    return this.userRepository.getById(id);
  }

  createUser(user: User): void {
    this.userRepository.add(user);
  }
}
