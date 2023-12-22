import { DomainEventPublisher } from "../../shared/domain/DomainEventPublisher";
import { InvalidUserEmailException } from "./InvalidUserEmailException";
import { UserRegistered } from "./UserRegistered";

export class Role {}

export class User {
  constructor(
    public id: string,
    public email: string,
    public name?: string,
    public isActive?: boolean
  ) {
    this.validateEmail(email);
    this.name = this.generateName(this.email);
    DomainEventPublisher.getInstance().publish(new UserRegistered(id));
  }

  private validateEmail(email: string) {
    const emailRegex = /ten.com$/;
    if (!email.match(emailRegex)) throw new InvalidUserEmailException(email);
    this.email = email;
  }

  private generateName(email: string) {
    return email
      .split("@")[0]
      .replaceAll("-", ".")
      .split(".")
      .map((name) => this.capitalize(name))
      .join(" ");
  }

  private capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
