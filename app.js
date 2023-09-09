import Subjects from "./modules/subjects.js";
import Teachers from "./modules/teachers.js";
import Pupils from "./modules/pupils.js";
// import Groups from "./modules/groups.js";
// import Gradebooks from "./modules/gradebooks.js";

//whyyyy? ----------------------------------------------------------------
//description: 33 in teachers  and pupils dont throw errors

// //TEST SUBJECTS
const subjects = new Subjects();
const history = {
  title: "History",
  lessons: 24,
};

const math = {
  title: "math",
  lessons: 21,
};

const subjectId = subjects.add(history);
console.log(subjectId);
const subjectId1 = subjects.add(math);
console.log(subjectId1);

console.log(subjects.verify(math));

console.log(subjects.readAll());

const teachers = new Teachers();

const data = {
  name: {
    first: "string",
    last: "string",
  },
  dateOfBirth: "29/09/1994", // format date
  emails: [
    {
      email: "maghradze@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "+995555667788",
      primary: true,
    },
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "string",
};

const teacherId = teachers.add(data);

const updatedProfile = {
  name: {
    first: "teona",
    last: "string",
  },
  dateOfBirth: "29/09/1994", // format date
  emails: [
    {
      email: "maghradze@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "+995555667788",
      primary: true,
    },
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "saasas",
};
const teachers2 = teachers.add(updatedProfile);
console.log(teachers);

// const teacherId2 = teachers.update(teacherId, updatedProfile);

// teachers.remove(teacherId);

// //PUPILS
const pupils = new Pupils();
console.log(pupils);
const dataPup = {
  name: {
    first: "string",
    last: "string",
  },
  dateOfBirth: "15/02/1888", // format date
  phones: [
    {
      phone: "+995555888888",
      primary: true,
    },
  ],
  sex: "male", // male OR female
  description: "string",
};

const pupil = pupils.add(dataPup);
console.log(pupils);

////GROUPS

// const groups = new Groups();
// const room = 236;
// const groupId = groups.add(room);

// groups.addPupil(groupId, pupil);

// groups.update(groupId, {
//   room: 237,
// });

// //gradebooks
// const gradebooks = new Gradebooks(groups, teachers, subjects);

// const gradebookId = gradebooks.add(groupId);

// const record = {
//   pupilId: "0",
//   teacherId: teacherId,
//   subjectId: subjectId,
//   lesson: 1,
//   mark: 9,
// };

// gradebooks.addRecord(gradebookId, record);

// const students = gradebooks.readAll(gradebookId);
