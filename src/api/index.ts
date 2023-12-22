import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import { TypeOrmClient } from "../shared/infraestructure/TypeOrmClient";
import authRouter from "./routes/auth.routes";
import httpStatus from "http-status";
import Router from "express-promise-router";
import { DomainEventPublisher } from "../shared/domain/DomainEventPublisher";
import { PersistDomainEventSubscriber } from "../shared/domain/PersistDomainEventSubscriber";
import { PrismaEventStore } from "../shared/infraestructure/PrismaEventStore";
const app = express();

TypeOrmClient.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error: ", err));

app.use(json());
app.use(urlencoded({ extended: true }));

DomainEventPublisher.getInstance().subscribe(
  new PersistDomainEventSubscriber(new PrismaEventStore())
);

app.use("/auth", authRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
});

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
