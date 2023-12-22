import { Request, Response } from "express";
import { z } from "zod";
import { UserSignup } from "../../User/application/UserSignup";

const UserSignInValidator = z.object({
  email: z.string(),
});
type UserSignInValidator = z.infer<typeof UserSignInValidator>;

export class AuthPutController {
  constructor(private readonly service: UserSignup) {}

  async run(req: Request, res: Response, next: Function): Promise<void> {
    await this.service.signup(req.body.id, req.body.email);

    res.status(201).send();
  }
}
