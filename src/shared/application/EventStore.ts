import { DomainEvent } from "../domain/DomainEvent";

export interface EventStore {
  append(event: DomainEvent): Promise<void>;

  allStoredEventsSince(eventId: string): Promise<DomainEvent[]>;
}
