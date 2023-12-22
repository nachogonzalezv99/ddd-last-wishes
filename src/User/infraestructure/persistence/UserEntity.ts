import { EntitySchema } from "typeorm";
import { User } from "../../domain/User";

export const UserEntity = new EntitySchema<User>({
  name: "User",
  tableName: "users",
  //target: User,
  columns: {
    id: {
      type: String,
      primary: true,
    },
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
