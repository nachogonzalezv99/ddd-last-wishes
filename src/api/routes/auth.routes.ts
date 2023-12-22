import Router from "express-promise-router";
import { AuthPutController } from "../controllers/auth.controller";
import { UserSignup } from "../../User/application/UserSignup";
import { TypeOrmUserRepository } from "../../User/infraestructure/persistence/TypeOrmUserRepository";

const router = Router();

const repository = new TypeOrmUserRepository();
const service = new UserSignup(repository);
const controller = new AuthPutController(service);

router.use("/signup", async (req, res, next) => controller.run(req, res, next));

export default router;
