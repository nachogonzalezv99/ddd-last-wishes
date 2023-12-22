import { UserDoesNotExistException } from "../domain/UserDoesNotExistException";
import { UserRepository } from "../domain/UserRepository";

export class UserArchiver {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: any
  ) {}

  async archive(email: string) {
    const user = await this.userRepository.searchByEmail(email);
    if (user === null) throw new UserDoesNotExistException();
    
    await this.userRepository.save(user);
  }
}
