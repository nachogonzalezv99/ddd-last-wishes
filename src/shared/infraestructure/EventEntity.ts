import { EntitySchema } from "typeorm";

export const EventEntity = new EntitySchema({
  name: "Event",
  tableName: "events",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    body: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    ocurred_on: {
      type: "date",
      default: new Date(),
    },
  },
});
