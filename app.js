//  create instances of classes, interact with them to demonstrate how the school management system works.
import Subjects from "./modules/subjects.mjs";
import Teachers from "./modules/teachers.mjs";
import Pupils from "./modules/pupils.mjs";
import Groups from "./modules/groups.mjs";
import Gradebooks from "./modules/gradebooks.mjs";

// //TEST SUBJECTS
// const subjects = new Subjects();
// const history = {
//   title: "History",
//   lessons: 24,
// };

// const subjectId = subjects.add(history);

// const teachers = new Teachers();

// const data = {
//   name: {
//     first: "string",
//     last: "string",
//   },
//   dateOfBirth: "29/09/1994", // format date
//   emails: [
//     {
//       email: "maghradze@gmail.com",
//       primary: true,
//     },
//   ],
//   phones: [
//     {
//       phone: "+995555667788",
//       primary: true,
//     },
//   ],
//   sex: "male", // male or female
//   subjects: [
//     {
//       subject: "string", // just name property of subject.
//     },
//   ],
//   description: "string",
// };

// const teacherId = teachers.add(data);

// const updatedProfile = {
//   name: {
//     first: "teona",
//     last: "string",
//   },
//   dateOfBirth: "29/09/1994", // format date
//   emails: [
//     {
//       email: "maghradze@gmail.com",
//       primary: true,
//     },
//   ],
//   phones: [
//     {
//       phone: "+995555667788",
//       primary: true,
//     },
//   ],
//   sex: "male", // male or female
//   subjects: [
//     {
//       subject: "string", // just name property of subject.
//     },
//   ],
//   description: "aaaa",
// };

// const teacherId2 = teachers.update(teacherId, updatedProfile);

// //PUPILS
// const pupils = new Pupils();
// const dataPup = {
//   name: {
//     first: "string",
//     last: "string",
//   },
//   dateOfBirth: "15/02/1888", // format date
//   phones: [
//     {
//       phone: "+995555888888",
//       primary: true,
//     },
//   ],
//   sex: "male", // male OR female
//   description: "string",
// };

// const pupil = pupils.add(dataPup);
// //groups

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
