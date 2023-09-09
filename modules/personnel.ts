import { validateProfile, Profile } from "../utils/validator.js";

class Personnel {
  protected personnel: Profile[];

  constructor() {
    this.personnel = [];
  }

  add(profile: Profile): string {
    validateProfile(profile);
    const personnelId = this.personnel.length.toString();
    const personnelWithId = { ...profile, id: personnelId };
    this.personnel.push(personnelWithId);
    return personnelId;
  }

  read(personnelId: string): Profile | undefined {
    return this.personnel.find((personnel) => personnel.id === personnelId);
  }

  update(personnelId: string, updatedProfile: Profile): void {
    const index = this.personnel.findIndex(
      (personnel) => personnel.id === personnelId
    );
    if (index === -1) {
      throw new Error("Personnel not found");
    }
    this.personnel[index] = { ...updatedProfile, id: personnelId };
  }

  remove(personnelId: string): void {
    this.personnel = this.personnel.filter(
      (personnel) => personnel.id !== personnelId
    );
  }
}

export default Personnel;
