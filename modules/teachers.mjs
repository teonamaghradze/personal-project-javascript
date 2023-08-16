"use strict";

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
    const { name, dateOfBirth, emails, phones, sex, subjects } = profile;
    // if (
    //   typeof name.first !== "string" ||
    //   typeof name.last !== "string" ||
    //   typeof dateOfBirth !== "string" ||
    //   typeof sex !== "string" ||
    //   !["male", "female"].includes(sex) ||
    //   !this.validateEmails(emails) ||
    //   !this.validatePhones(phones) ||
    //   !this.validateSubjects(subjects)
    // ) {
    //   throw new Error("Invalid teacher profile format");
    // }
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

export default Teachers;
