import { UserRegistered } from "../../User/domain/UserRegistered";
import { EventStore } from "../application/EventStore";
import { DomainEvent } from "../domain/DomainEvent";

export class PrismaEventStore implements EventStore {
  async append(event: DomainEvent) {
    // add event to db (event_id, event_body, type_name, ocurred_on), serialized in json
    // (min 25 DDD: Domain Events and Bounded Context Integration - Carlos Buenosvinos)
    //
    // await prisma.events.create({data: ... })
  }

  async allStoredEventsSince(eventId: string) {
    //
    return [new UserRegistered("1")];
  }

  serializer() {}
}
