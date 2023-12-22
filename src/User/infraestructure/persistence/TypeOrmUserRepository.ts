import { TypeOrmClient } from "../../../shared/infraestructure/TypeOrmClient";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserEntity } from "./UserEntity";

export class TypeOrmUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    await TypeOrmClient.manager.save(UserEntity, user);
  }

  async searchByEmail(email: string): Promise<User | null> {
    return TypeOrmClient.manager.findOneBy(UserEntity, {
      email,
    });
  }
}
