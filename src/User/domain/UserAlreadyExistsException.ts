export class UserAlreadyExistsException extends Error{
    constructor(email: string) {
        super(`The user with email <${email}> already exists.`);
      }
}