"use strict";

import { validateProfile } from "../utils/validator.js";
import Personnel from "./personnel.mjs";

class Teachers extends Personnel {
  constructor() {
    super([]);
    this.personnel = [];
  }

  add(profile) {
    validateProfile(profile);
    const teacherId = this.personnel.length.toString();
    const teacherWithId = { ...profile, id: teacherId };
    this.personnel.push(teacherWithId);
    return teacherId;
  }

  // read(teacherId) {
  //   const teacher = this.teachers.find((teacher) => teacher.id === teacherId);
  //   if (!teacher) {
  //     throw new Error("Teacher not found");
  //   }
  //   return teacher;
  // }

  // update(teacherId, updatedProfile) {
  //   const index = this.teachers.findIndex(
  //     (teacher) => teacher.id === teacherId
  //   );
  //   if (index === -1) {
  //     throw new Error("Teacher not found");
  //   }
  //   this.teachers[index] = { ...updatedProfile, id: teacherId };
  // }

  // remove(teacherId) {
  //   this.teachers = this.teachers.filter((teacher) => teacher.id !== teacherId);
  // }
}

export default Teachers;
