import { validateSubject } from "../utils/validator.js";

class Subjects {
  constructor() {
    this.subjects = [];
  }

  add(subject) {
    validateSubject(subject);
    const subjectId = this.subjects.length.toString();
    const subjWithId = { id: subjectId, ...subject };
    this.subjects.push(subjWithId);
    return subjectId;
  }

  remove(subjectId) {
    this.subjects = this.subjects.filter((subject) => subject.id !== subjectId);
  }

  verify(subject) {
    return this.subjects.some(
      (el) => el.title === subject.title && el.lessons === subject.lessons
    );
  }

  readAll() {
    return this.subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      lessons: subject.lessons,
      ...(subject.description && { description: subject.description }),
    }));
  }
}

export default Subjects;
