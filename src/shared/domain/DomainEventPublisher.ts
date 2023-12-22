import { DomainEvent } from "./DomainEvent";
import { DomainEventSubscriber } from "./DomainEventSubscriber";

export class DomainEventPublisher {
  private subscribers: DomainEventSubscriber[] = [];
  private static instance: DomainEventPublisher;

  private constructor() {}

  public static getInstance(): DomainEventPublisher {
    if (!this.instance) this.instance = new DomainEventPublisher();
    return this.instance;
  }

  publish(event: DomainEvent) {
    for (const subscriber of this.subscribers) {
      if (subscriber.isSubscribedTo(event)) {
        subscriber.handle(event);
      }
    }
  }

  subscribe(eventSubscriber: DomainEventSubscriber) {
    this.subscribers.push(eventSubscriber);
  }
}

