export class AccessControl {
  private data = {};

  grant(role: string) {
    this.data = { ...this.data, role: {} };
    return this;
  }

  createOwn() {
    return this;
  }

  deleteOwn() {
    return this;
  }

  extend() {
    return this;
  }

  updateAny() {
    return this;
  }

  deleteAny() {
    return this;
  }
}

const ac = new AccessControl();
ac.grant("user").createOwn().grant("admin");
