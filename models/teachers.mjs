// // This class manages information about teachers.
// // Teachers have various properties like name, date of birth, contact information, subjects they teach, etc.
// // You can add, read, update, and remove teachers.
// "use strict";
// class Teachers {
//   constructor() {
//     this.teachers = [];
//   }

//   validateEmails(emails) {
//     return emails.every(
//       (email) =>
//         typeof email.email === "string" && typeof email.primary === "boolean"
//     );
//   }

//   validatePhones(phones) {
//     return phones.every(
//       (phone) =>
//         typeof phone.phone === "string" && typeof phone.primary === "boolean"
//     );
//   }

//   validateSubjects(subjects) {
//     return subjects.every((subject) => typeof subject.subject === "string");
//   }

//   validateTeacherProfile(profile) {
//     const { name, dateOfBirth, emails, phones, sex, subjects } = teachers;
//     if (
//       typeof name.first !== "string" ||
//       typeof name.last !== "string" ||
//       typeof dateOfBirth !== "string" ||
//       typeof sex !== "string" ||
//       !["male", "female"].includes(sex) ||
//       !this.validateEmails(emails) ||
//       !this.validatePhones(phones) ||
//       !this.validateSubjects(subjects)
//     ) {
//       throw new Error("Invalid teacher profile format");
//     }
//   }

//   add(teachers) {
//     this.validateTeacherProfile(profile);
//     const teacherId = this.teachers.length.toString();
//     const teacherWithId = { ...teachers, id: teacherId };
//     this.teachers.push(teacherWithId);
//     return teacherId;
//   }
//   read(teacherId) {
//     const teacher = this.teachers.find((teacher) => teacher.id === teacherId);
//     if (!teacher) {
//       throw new Error("Teacher not found");
//     }
//     return teacher;
//   }

//   update(teacherId, updatedProfile) {
//     this.validateTeacherProfile(updatedProfile);
//     const index = this.teachers.findIndex(
//       (teacher) => teacher.id === teacherId
//     );
//     if (index === -1) {
//       throw new Error("Teacher not found");
//     }
//     this.teachers[index] = { ...updatedProfile, id: teacherId };
//   }

//   remove(teacherId) {
//     this.teachers = this.teachers.filter((teacher) => teacher.id !== teacherId);
//   }
// }

// // Teacher's schema
// const data = {
//   name: {
//     first: "teona",
//     last: "Maghradze",
//   },
//   dateOfBirth: "string", // format date
//   emails: [
//     {
//       //   email: "string",
//       primary: "boolean",
//     },
//   ],
//   phones: [
//     {
//       phone: "string",
//       primary: "boolean",
//     },
//   ],
//   sex: "string", // male or female
//   subjects: [
//     {
//       subject: "string", // just name property of subject.
//     },
//   ],
//   description: "string",
// };
// // all fields are required, except description

// // Create new Teachers class.
// const teachers = new Teachers();

// // Create a new teacher
// const teacherId = teachers.add(data);
// console.log(teacherId);

// // will return Teachers data including teacher's id
// teachers.read(teacherId);

// console.log(teachers);
// // will update Teacher. This method should use the same validation as a add method

// const updatedProfile = {
//   name: {
//     first: "string",
//     last: "string",
//   },
//   dateOfBirth: "string", // format date
//   emails: [
//     {
//       email: "string",
//       primary: "boolean",
//     },
//   ],
//   phones: [
//     {
//       phone: 55555,
//       primary: "boolean",
//     },
//   ],
//   sex: "string", // male or female
//   subjects: [
//     {
//       subject: "string", // just name property of subject.
//     },
//   ],
//   description: "dsadsasdasads",
// };
// const teacherId1 = teachers.update(teacherId, updatedProfile);
// console.log(teachers);

// // will remove teacher
// teachers.remove(teacherId);
// console.log(teachers);

"use strict";

import { Pupils } from "./pupils.mjs";

class Teachers {
  constructor() {
    this.teachers = [];
  }

  validateEmails(emails) {
    return emails.every(
      (email) =>
        typeof email.email === "string" && typeof email.primary === "boolean"
    );
  }

  validatePhones(phones) {
    return phones.every(
      (phone) =>
        typeof phone.phone === "string" && typeof phone.primary === "boolean"
    );
  }

  validateSubjects(subjects) {
    return subjects.every((subject) => typeof subject.subject === "string");
  }

  validateTeacherProfile(profile) {
    const { name, dateOfBirth, emails, phones, sex, subjects } = profile; // Corrected: Use 'profile' instead of 'teachers'
    if (
      typeof name.first !== "string" ||
      typeof name.last !== "string" ||
      typeof dateOfBirth !== "string" ||
      typeof sex !== "string" ||
      !["male", "female"].includes(sex) ||
      !this.validateEmails(emails) ||
      !this.validatePhones(phones) ||
      !this.validateSubjects(subjects)
    ) {
      throw new Error("Invalid teacher profile format");
    }
  }

  add(profile) {
    // Corrected: Use 'profile' instead of 'teachers'
    this.validateTeacherProfile(profile);
    const teacherId = this.teachers.length.toString();
    const teacherWithId = { ...profile, id: teacherId }; // Corrected: Use 'profile' instead of 'teachers'
    this.teachers.push(teacherWithId);
    return teacherId;
  }

  read(teacherId) {
    const teacher = this.teachers.find((teacher) => teacher.id === teacherId);
    if (!teacher) {
      throw new Error("Teacher not found");
    }
    return teacher;
  }

  update(teacherId, updatedProfile) {
    this.validateTeacherProfile(updatedProfile);
    const index = this.teachers.findIndex(
      (teacher) => teacher.id === teacherId
    );
    if (index === -1) {
      throw new Error("Teacher not found");
    }
    this.teachers[index] = { ...updatedProfile, id: teacherId };
  }

  remove(teacherId) {
    this.teachers = this.teachers.filter((teacher) => teacher.id !== teacherId);
  }
}

// Example data for teacher's profile
const data = {
  name: {
    first: "teona",
    last: "Maghradze",
  },
  dateOfBirth: "1990-01-01",
  emails: [
    {
      email: "teona@example.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "5555555555",
      primary: true,
    },
  ],
  sex: "female",
  subjects: [
    {
      subject: "Math",
    },
  ],
  description: "Some description",
};

// Create new Teachers class.
const teachers = new Teachers();

// Create a new teacher
const teacherId = teachers.add(data);
console.log("Added teacher with ID:", teacherId);

// Read teacher's profile
const readTeacher = teachers.read(teacherId);
console.log("Read teacher:", readTeacher);

// Update teacher's profile
const updatedProfile = {
  name: {
    first: "Teona",
    last: "Updated",
  },
  dateOfBirth: "1990-01-01",
  emails: [
    {
      email: "teona.updated@example.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "5555551234",
      primary: true,
    },
  ],
  sex: "female",
  subjects: [
    {
      subject: "Science",
    },
  ],
  description: "Updated description",
};
teachers.update(teacherId, updatedProfile);
console.log("Updated teacher:", teachers.read(teacherId));

// Remove teacher
teachers.remove(teacherId);
console.log("Teachers after removal:", teachers.teachers);
