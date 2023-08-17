//  create instances of classes, interact with them to demonstrate how the school management system works.
import Subjects from "./modules/subjects.mjs";
import Teachers from "./modules/teachers.mjs";
import Pupils from "./modules/pupils.mjs";
import Groups from "./modules/groups.mjs";
import Gradebooks from "./modules/gradebooks.mjs";

//TEST SUBJECTS
const subjects = new Subjects();

const history = {
  title: "History",
  lessons: 24,
};
const eng = {
  title: "eng",
  lessons: 28,
};
const subjectId = subjects.add(history);
const subjectId2 = subjects.add(eng);

// subjects.remove(subjectId);
// console.log(subjects);

subjects.verify(history);
subjects.readAll();

//TEST TEACHERS
const teachers = new Teachers();

const data = {
  name: {
    first: "teona",
    last: "magradze",
  },
  dateOfBirth: "29.09.1994", // format date
  emails: [
    {
      email: "maghradzeteo@gmail.com",
      primary: "boolean",
    },
  ],
  phones: [
    {
      phone: "+995555281138",
      primary: "boolean",
    },
  ],
  sex: "female", // male or female
  subjects: [
    {
      subject: "eng", // just name property of subject.
    },
  ],
  description: "descriptionnnnn",
};

const teacherId = teachers.add(data);

const updatedProfile = {
  name: {
    first: "julia",
    last: "magradze",
  },
  dateOfBirth: "29.09", // format date
  emails: [
    {
      email: "maghradzeteo@gmail.com",
      primary: "boolean",
    },
  ],
  phones: [
    {
      phone: "+995555281138",
      primary: "boolean",
    },
  ],
  sex: "female", // male or female
  subjects: [
    {
      subject: "eng", // just name property of subject.
    },
  ],
  description: "descriptionnnnn",
};

const teacherId2 = teachers.update(teacherId, updatedProfile);

// teachers.remove(teacherId);

//

//PUPILS
const pupilsData = {
  name: {
    first: "string",
    last: "string",
  },
  dateOfBirth: "string", // format date
  phones: [
    {
      phone: "string",
      primary: "boolean",
    },
  ],
  sex: "string", // male OR female
  description: "string",
};
// all fields are required, except description

// Create new Pupil from Pupil's data
const pupils = new Pupils();

const pupil = pupils.add(pupilsData);
// console.log(pupil.id); // should return pupil ID

//GROUPS

const groups = new Groups();
const room = 236;

const groupId = groups.add(room);

groups.addPupil(groupId, pupil);
// console.log(groups);

groups.update(groupId, {
  room: 237,
});

groups.read(groupId);
// console.log(groups);

// console.log(groups.readAll());

//gradeBOOOKs

const gradebooks = new Gradebooks(groups, teachers, subjects);
const gradebookId = gradebooks.add(groupId);
// console.log(gradebooks);

gradebooks.clear();
// console.log(gradebooks);

const pupilId = pupil.pupilId;
const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: subjectId,
  lesson: 1,
  mark: 9,
};

gradebooks.addRecord(gradebookId, record);

// console.log(gradebooks);
