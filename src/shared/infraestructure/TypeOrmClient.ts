import { DataSource } from "typeorm";
import { UserEntity } from "../../User/infraestructure/persistence/UserEntity";

export const TypeOrmClient = new DataSource({
  type: "postgres",
  host: "ep-dark-shadow-73796125-pooler.eu-central-1.aws.neon.tech",
  port: 5432,
  username: "nachogonzalezv99",
  password: "wFWsJ1bG2TaR",
  database: "ddd-last-wishes",
  extra: {
    ssl: "true",
  },
  entities: [UserEntity],
  synchronize: true,
  logging: true,
});
