import { UserDoesNotExistException } from "../domain/UserDoesNotExistException";
import { UserInactiveException } from "../domain/UserInactiveException";
import { UserRepository } from "../domain/UserRepository";

export class UserSignin {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async signin(email: string) {
    const user = await this.userRepository.searchByEmail(email);
    if (!user) throw new UserDoesNotExistException();
    if (!user.isActive) throw new UserInactiveException();

  }
}
