import Personnel from "./personnel.js";
import { validateProfile, Profile } from "../utils/validator.js";

class Pupils extends Personnel {
  constructor() {
    super();
  }

  add(profile: Profile): Profile | string {
    validateProfile(profile);
    const personnelId = this.personnel.length.toString();
    const personnelWithId = { ...profile, id: personnelId };
    this.personnel.push(personnelWithId);

    return personnelWithId;
  }

  validatePhones(phones: { phone: string; primary: boolean }[]): boolean {
    return phones.every(
      (phone) =>
        typeof phone.phone === "string" && typeof phone.primary === "boolean"
    );
  }
}

export default Pupils;
