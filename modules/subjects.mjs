class Subjects {
  constructor() {
    this.subjects = [];
  }

  validateSubject(subject) {
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

  add(subject) {
    this.validateSubject(subject);
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
