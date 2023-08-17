export function validateSubject(subject) {
  if (typeof subject !== "object") {
    throw new Error("Parameter must be an object");
  }
  if (typeof subject.title !== "string") {
    throw new Error("subject title must be a string");
  }

  if (typeof subject.lessons !== "number") {
    throw new Error("lessons type must be a number");
  }

  if (subject.description && typeof subject.description !== "string") {
    throw new Error("Parameter must be a string");
  }
}

export function validateProfile(profile) {
  const { name, dateOfBirth, phones, sex } = profile;
  console.log(typeof name.first !== "string");

  if (typeof name.first !== "string") {
    console.log(11);
    throw new Error("profile first name must be a string");
  }

  if (typeof name.last !== "string") {
    throw new Error("profile last name must be a string");
  }
  //   typeof dateOfBirth !== "string" ||
  //   typeof sex !== "string" ||
  //   !["male", "female"].includes(sex) ||
  //   !this.validatePhones(phones)
  // ) {
  //   throw new Error("Invalid pupil profile format");
  // }
}
