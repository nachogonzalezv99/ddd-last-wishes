import { UserRegistered } from "../../User/domain/UserRegistered";
import { EventStore } from "../application/EventStore";
import { DomainEvent } from "../domain/DomainEvent";
import { EventEntity } from "./EventEntity";
import { TypeOrmClient } from "./TypeOrmClient";

export class TypeOrmEventStore implements EventStore {
  async append(event: DomainEvent) {
    await TypeOrmClient.manager.insert(EventEntity, {
      body: event,
      ocurred_on: event.ocurredOn(),
      name: event
    });
  }

  async allStoredEventsSince(eventId: string) {
    //
    return [new UserRegistered("1")];
  }

  serializer() {}
}
