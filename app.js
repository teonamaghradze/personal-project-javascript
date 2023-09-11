import Subjects from "./modules/subjects.js";
import Teachers from "./modules/teachers.js";
import Pupils from "./modules/pupils.js";
import Groups from "./modules/groups.js";
import Gradebooks from "./modules/gradebooks.js";

//whyyyy? ----------------------------------------------------------------
//description: 33 in teachers  and pupils dont throw errors
//pupil id tests

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
// console.log(subjectId);
const subjectId1 = subjects.add(math);
// console.log(subjectId1);

// console.log(subjects.verify(math));

// console.log(subjects.readAll());

const teachers = new Teachers();

const data = {
  name: {
    first: "Elizabeth",
    last: "Holms",
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
  description: "ds",
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

// const teacherId2 = teachers.update(teacherId, updatedProfile);
// teachers.remove(teacherId);

// //PUPILS
const pupils = new Pupils();
const dataPup = {
  name: {
    first: "Oliver",
    last: "Black",
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
const pup2 = {
  name: {
    first: "assas",
    last: "Black",
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
const pupil1 = pupils.add(pup2);
// console.log(pupils);

////GROUPS

const groups = new Groups();
const room = 236;
const groupId = groups.add(room);

// console.log(pupil);

groups.addPupil(groupId, pupil);
groups.addPupil(groupId, pupil1);

groups.update(groupId, {
  room: 237,
});
// console.log(groups);

//gradebooks
// const gradebooks = new Gradebooks(groups, teachers, subjects);

// const gradebooksId = gradebooks.add(groupId);

// const record = {
//   pupilId: "0",
//   teacherId: teacherId,
//   subjectId: subjectId,
//   lesson: 1,
//   mark: 9,
// };
// console.log(gradebooks);

////////////////
const gradebook = new Gradebooks(groups, teachers, subjects);
let pupilId = 0;
// Create a new gradebook.
const gradebookId = gradebook.add(groupId);
// // // Destroy all data inside this gradebook
// // gradebook.clear();
// // console.log(gradebook);

// shceme of a record. all fields are required.
const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: subjectId,
  lesson: 1,
  mark: 9,
};

gradebook.addRecord(gradebookId, record);

// console.log(gradebook);

// Read information about oliver results
const oliver = gradebook.read(gradebookId, pupilId);
console.log(oliver, "asdasdas");

console.log("----------------------");

const students = gradebook.readAll(gradebookId);

// //  {
// //   name: "Oliver Black",
// //   records: [
// //     {
// //       teacher: "Elizabeth Holms",
// //       subject: "History",
// //       lesson: 1,
// //       mark: 9,
// //     },
// //   ],
// // };

// // const students = gradebooks.read(gradebookId, pupilId);
// // console.log(students);
