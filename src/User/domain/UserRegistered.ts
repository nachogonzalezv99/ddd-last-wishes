import { DomainEvent } from "../../shared/domain/DomainEvent";

export class UserRegistered implements DomainEvent {
  private date: Date;

  constructor(private userId: string) {
    this.date = new Date();
  }

  ocurredOn(): Date {
    return this.date;
  }
}
