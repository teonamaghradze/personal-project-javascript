"use strict";
import { validateProfile } from "../utils/validator.js";

class Personnel {
  constructor(personnel) {
    this.personnel = personnel;
  }

  add(profile) {
    validateProfile(profile);
    const personnelId = this.personnel.length.toString();
    const personnelWithId = { ...profile, id: personnelId };
    this.personnel.push(personnelWithId);
    return personnelWithId;
  }

  read(personnelId) {
    const personnel = this.personnel.find(
      (personnel) => personnel.id === personnelId
    );
    if (!personnel) {
      throw new Error("Personnel not found");
    }
    return personnel;
  }

  update(personnelId, updatedProfile) {
    const index = this.personnel.findIndex(
      (personnel) => personnel.id === personnelId
    );
    if (index === -1) {
      throw new Error("Personnel not found");
    }
    this.personnel[index] = { ...updatedProfile, id: personnelId };
  }

  remove(personnelId) {
    this.personnel = this.personnel.filter(
      (personnel) => personnel.id !== personnelId
    );
  }
}

export default Personnel;
