// This class manages information about school subjects.
// You can add, remove, verify, and read all subjects.
// Subjects have properties like title, lessons, and optional description.

class Subjects {
  constructor() {
    this.subjects = [];
  }

  validateSubject(subject) {
    if (
      typeof subject.title !== "string" ||
      typeof subject.lessons !== "number" ||
      (subject.description && typeof subject.description !== "string")
    ) {
      throw new Error("Invalid subject format");
    }
  }

  add(subject) {
    this.validateSubject(subject);
    const subjectId = this.subjects.length.toString();
    const subjWithId = { ...subject, id: subjectId };
    this.subjects.push(subjWithId);
    return subjectId;
  }

  remove(subjectId) {
    this.subjects = this.subjects.filter((subject) => subject.id !== subjectId);
  }

  verify(subject) {
    //checks whether a subject with the same title and lessons properties as the provided subject already exists in the subjects array. true if such a subject exists, and false otherwise. This method can be used to avoid adding duplicate subjects to the array.
    return this.subjects.some(
      (el) => el.title === subject.title && el.lessons === subject.lessons
    );
  }

  readAll() {
    return this.subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      lessons: subject.lessons,
      //   description: subject.description || "",
      ...(subject.description && { description: subject.description }),
    }));
  }
}

// example of creating Subject's instance:
const history = {
  title: "History",
  lessons: 24,
};

const english = {
  title: "eng",
  lessons: 25,
  description: "sfdssd",
};

//TEST IMPLEMENTATIONS

const subjects = new Subjects();
const subjectId = subjects.add(history); // should add subject. Returns subject id
const subjectId1 = subjects.add(english); // should add subject. Returns subject id
// console.log(subjects);
// subjects.remove(subjectId); // should remove subject from subjects
// console.log(subjects);

// will return true or false. Answer will be true if such subject exists in subjects.
const subjectsVerify = subjects.verify(history);
// console.log(subjectsVerify);

// will return array of registered subjects
// each subject must contain: id, title, lessons and description propertties.
const readAllarr = subjects.readAll();
[
  {
    id: "0",
    title: "History",
    lessons: 24,
  },
];

console.log(readAllarr);
