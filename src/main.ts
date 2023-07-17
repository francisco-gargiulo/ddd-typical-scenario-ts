import { UserController } from "./interfaces/controllers/user.controller";
import { UserApplicationService } from "./application/user.application.service";
import { UserService } from "./domain/services/user.service";
import { UserRepositoryImpl } from "./infrastructure/repositories/user.repository-impl";

const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);
const userApplicationService = new UserApplicationService(userService);
const userController = new UserController(userApplicationService);

// execution
userController.getUser("1"); // This will throw an error because there is no user with id 1 in the database
userController.createUser("1", "user1", "password1"); // This will add a user with id 1 to the database