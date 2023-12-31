"use strict";
import Personnel from "./personnel.mjs";

class Pupils extends Personnel {
  constructor() {
    super([]);
  }

  validatePhones(phones) {
    return phones.every(
      (phone) =>
        typeof phone.phone === "string" && typeof phone.primary === "boolean"
    );
  }
}

export default Pupils;
