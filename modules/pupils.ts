import Personnel from "./personnel.js";

class Pupils extends Personnel {
  constructor() {
    super();
  }

  validatePhones(phones: { phone: string; primary: boolean }[]): boolean {
    return phones.every(
      (phone) =>
        typeof phone.phone === "string" && typeof phone.primary === "boolean"
    );
  }
}

export default Pupils;
