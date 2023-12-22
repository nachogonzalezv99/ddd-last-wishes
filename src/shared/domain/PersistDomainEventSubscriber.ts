import { EventStore } from "../application/EventStore";
import { DomainEvent } from "./DomainEvent";
import { DomainEventSubscriber } from "./DomainEventSubscriber";

export class PersistDomainEventSubscriber implements DomainEventSubscriber{
  constructor(private readonly eventStore: EventStore) {}

  handle(event: DomainEvent) {
    this.eventStore.append(event);
  }

  isSubscribedTo(event: DomainEvent) {
    return true;
  }
}
