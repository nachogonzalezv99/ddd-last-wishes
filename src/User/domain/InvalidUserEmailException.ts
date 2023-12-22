export class InvalidUserEmailException extends Error {
  constructor(email: string) {
    super(`The email <${email}> is not a tehnip valid email.`);
  }
}
