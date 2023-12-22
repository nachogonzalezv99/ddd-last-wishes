import { User } from "../domain/User";
import { UserAlreadyExistsException } from "../domain/UserAlreadyExistsException";
import { UserRepository } from "../domain/UserRepository";

export class UserSignup {
  constructor(private readonly userRepository: UserRepository) {}

  async signup(id: string, email: string): Promise<void> {
    // begin transaction
    const existingUser = await this.userRepository.searchByEmail(email);
    if (existingUser) throw new UserAlreadyExistsException(email);

    const user = new User(id, email, "", false);

    await this.userRepository.save(user);
    // end transaction
  }
}
