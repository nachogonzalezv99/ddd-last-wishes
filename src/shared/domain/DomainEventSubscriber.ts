import { DomainEvent } from "./DomainEvent";

export interface DomainEventSubscriber {
  handle(event: DomainEvent): void;

  isSubscribedTo(event: DomainEvent): boolean;
}
