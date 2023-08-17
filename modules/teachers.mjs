"use strict";

import { validateProfile } from "../utils/validator.js";
import Personnel from "./personnel.mjs";

class Teachers extends Personnel {
  constructor() {
    super([]);
    this.personnel = [];
  }

  add(profile) {
    validateProfile(profile, true);
    const teacherId = this.personnel.length.toString();
    const teacherWithId = { ...profile, id: teacherId };
    this.personnel.push(teacherWithId);
    return teacherId;
  }
}

export default Teachers;
