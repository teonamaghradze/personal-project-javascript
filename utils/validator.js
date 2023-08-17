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
  const { name, dateOfBirth, emails, phones, sex } = profile;
  console.log(typeof name.first !== "string");

  if (typeof name.first !== "string") {
    console.log(11);
    throw new Error("profile first name must be a string");
  }

  if (typeof name.last !== "string") {
    throw new Error("profile last name must be a string");
  }

  if (typeof sex !== "string" || !["male", "female"].includes(sex)) {
    throw new Error("profile sex must be a string and male/female");
  }

  const dateOfBirthReg = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (typeof dateOfBirth !== "string" || !dateOfBirthReg.test(dateOfBirth)) {
    throw new Error(
      "Invalid date of birth format. Please use DD/MM/YYYY format."
    );
  }

  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emails) {
    if (!emailReg.test(emails[0].email))
      throw new Error(
        "Invalid email format. Please enter a valid email address."
      );
    if (typeof emails[0].primary !== "boolean") {
      throw new Error("primary must be true or false");
    }
  }

  const phonePattern = /^\+995\d{9}$/;

  if (
    typeof phones[0].phone !== "string" ||
    !phonePattern.test(phones[0].phone)
  ) {
    throw new Error(
      "Invalid phone number format. Please enter a valid phone number like +995XXXXXXXXX."
    );
  }
  if (typeof phones[0].primary !== "boolean") {
    throw new Error("primary must be true or false");
  }
}
