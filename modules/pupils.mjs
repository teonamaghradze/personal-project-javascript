// This class manages information about pupils (students).
// Pupils have properties like name, date of birth, sex, and contact information.
// You can add, read, update, and remove pupils.

("use strict");
class Pupils {
  constructor() {
    this.pupils = [];
  }

  validatePhones(phones) {
    return phones.every(
      (phone) =>
        typeof phone.phone === "string" && typeof phone.primary === "boolean"
    );
  }

  validatePupilProfile(profile) {
    const { name, dateOfBirth, phones, sex } = profile;
    // if (
    //   typeof name.first !== "string" ||
    //   typeof name.last !== "string" ||
    //   typeof dateOfBirth !== "string" ||
    //   typeof sex !== "string" ||
    //   !["male", "female"].includes(sex) ||
    //   !this.validatePhones(phones)
    // ) {
    //   throw new Error("Invalid pupil profile format");
    // }
  }

  add(profile) {
    this.validatePupilProfile(profile);
    const pupilId = this.pupils.length.toString();
    const pupilWithId = { ...profile, id: pupilId };
    this.pupils.push(pupilWithId);
    return pupilWithId;
  }

  read(pupilId) {
    const pupil = this.pupils.find((pupil) => pupil.id === pupilId);
    if (!pupil) {
      throw new Error("Pupil not found");
    }
    return pupil;
  }

  update(pupilId, updatedProfile) {
    this.validatePupilProfile(updatedProfile);
    const index = this.pupils.findIndex((pupil) => pupil.id === pupilId);
    if (index === -1) {
      throw new Error("Pupil not found");
    }
    this.pupils[index] = { ...updatedProfile, id: pupilId };
  }

  remove(pupilId) {
    this.pupils = this.pupils.filter((pupil) => pupil.id !== pupilId);
  }
}

export default Pupils;
