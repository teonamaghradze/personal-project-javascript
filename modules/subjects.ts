import { validateSubject, Subject } from "../utils/validator.js";

class Subjects {
  private subjects: Subject[];

  constructor() {
    this.subjects = [];
  }

  add(subject: Subject): string {
    validateSubject(subject);
    const subjectId = this.subjects.length.toString();
    const subjWithId: Subject = { ...subject, id: subjectId };

    // const subjWithId: Subject = { id: subjectId, ...subject };
    this.subjects.push(subjWithId);
    return subjectId;
  }

  remove(subjectId: string): void {
    this.subjects = this.subjects.filter((subject) => subject.id !== subjectId);
  }

  verify(subject: Subject): boolean {
    return this.subjects.some(
      (el) => el.title === subject.title && el.lessons === subject.lessons
    );
  }

  readAll(): Subject[] {
    return this.subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      lessons: subject.lessons,
      ...(subject.description && { description: subject.description }),
    }));
  }
}

export default Subjects;
