import { Name } from "../utils/validator";
import { Group } from "./groups";

interface Teacher {
  id: string;
  name: Name;
}

interface Subject {
  id: string;
  title: string;
}

interface Record {
  pupilId: string;
  teacherId: string;
  subjectId: string;
  lesson: string;
  mark: string;
}

interface Gradebook {
  groupId: string;
  records: Record[];
  id: string;
}

export class Gradebooks {
  private groups: Group[] | any;
  private teachers: Teacher[] | any;
  private subjects: Subject[] | any;
  private gradebooks: Gradebook[] | any;

  constructor(groups: Group[], teachers: Teacher[], subjects: Subject[]) {
    this.groups = groups;
    this.teachers = teachers;
    this.subjects = subjects;
    this.gradebooks = [];
  }

  add(groupId: string): number {
    let foundGroup: Gradebook = this.groups.groups.find(
      (gr) => gr.id === groupId
    );

    foundGroup.records = [];
    this.gradebooks.push(foundGroup);

    return this.gradebooks.length - 1;

    // if (foundGroup) {
    //   foundGroup.records = [];

    //   this.gradebooks.push(foundGroup);

    //   return this.gradebooks.length - 1;
    // }
  }

  clear(): void {
    this.gradebooks = [];
  }

  addRecord(gradebookId: number, record: Record): void {
    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      this.gradebooks[gradebookId].records.push(record);
    }
  }

  read(gradebookId: number, pupilId: string) {
    const studentInfo: {
      name: string;
      records: {
        teacher: string;
        subject: string | undefined;
        lesson: string;
        mark: string;
      }[];
    } = {
      name: "",
      records: [],
    };

    if (this.gradebooks[gradebookId]) {
      const gradebook = this.gradebooks[gradebookId];

      const studentRecords = gradebook.records.filter(
        (record) => record.pupilId === pupilId
      );

      if (studentRecords.length > 0) {
        const studentGroup = this.groups.groups.find(
          (group) => group.id === gradebook.id
        );

        const student = studentGroup?.pupils.find(
          (pupil) => pupil.id === pupilId.toString()
        );

        if (student) {
          studentInfo.name = `${student.name.first} ${student.name.last}`;

          studentInfo.records = studentRecords.map((record) => {
            const teacher = this.teachers.personnel.find(
              (teacher) => teacher.id === record.teacherId
            );

            const subject = this.subjects.subjects.find(
              (subject) => subject.id === record.subjectId
            );
            console.log(subject, "sadsadasdasdassdasdasdasdasdddddddddddddd");

            return {
              teacher: `${teacher?.name.first} ${teacher?.name.last}`,
              subject: subject?.title,
              lesson: record.lesson,
              mark: record.mark,
            };
          });
        }
      }
    }
    return studentInfo;
  }

  readAll(gradebookId: number) {
    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      const gradebook = this.gradebooks[gradebookId];

      const studInfo = [];
      for (const record of gradebook.records) {
        const pupilGroup = this.groups.groups[0];

        console.log(pupilGroup);
        const pupil = pupilGroup?.pupils.find(
          (p) => p.id === record.pupilId.toString()
        );

        const teacher = this.teachers.personnel.find(
          (t) => t.id === record.teacherId
        );
        const subject = this.subjects.subjects.find(
          (s) => s.id === record.subjectId
        );

        if (pupil && teacher && subject) {
          studInfo.push({
            pupil: `${pupil.name.first} ${pupil.name.last}`,
            teacher: `${teacher.name.first} ${teacher.name.last}`,
            subject: subject.title,
            lesson: record.lesson,
            mark: record.mark,
          });
        }
      }
      return studInfo;
    }

    // return [];
  }
}

export default Gradebooks;

//Plain JS

// export class Gradebooks {
//   constructor(groups, teachers, subjects) {
//     this.groups = groups;
//     this.teachers = teachers;
//     this.subjects = subjects;
//     this.gradebooks = [];
//   }
//   add(groupId) {
//     let foundGroup = this.groups.groups.find((gr) => gr.id === groupId);
//     foundGroup.records = [];
//     this.gradebooks.push(foundGroup);

//     return this.gradebooks.length - 1;
//   }
//   clear() {
//     this.gradebooks = [];
//   }
//   addRecord(gradebookId, record) {
//     if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
//       this.gradebooks[gradebookId].records.push(record);
//     }
//   }
//   read(gradebookId, pupilId) {
//     const studentInfo = {
//       name: "",
//       records: [],
//     };

//     if (this.gradebooks[gradebookId]) {
//       const gradebook = this.gradebooks[gradebookId];
//       const studentRecords = gradebook.records.filter(
//         (record) => record.pupilId === pupilId
//       );

//       if (studentRecords.length > 0) {
//         const studentGroup = this.groups.groups.find(
//           (group) => group.id === gradebook.id
//         );

//         console.log(this.groups);

//         const student = studentGroup?.pupils.find(
//           (pupil) => pupil.id === pupilId.toString()
//         );

//         console.log(student);
//       }
//     }

//     if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
//       const gradebook = this.gradebooks[gradebookId];
//       const studentRecords = gradebook.records.filter(
//         (record) => record.pupilId === pupilId
//       );
//       if (studentRecords.length > 0) {
//         console.log(this.groups.groups);
//         const studentGroup = this.groups.groups.find(
//           (group) => group.id === gradebook.id
//         );

//         const student = studentGroup?.pupils.find(
//           (pupil) => pupil.id === pupilId.toString()
//         );

//         if (student) {
//           studentInfo.name = `${student.name.first} ${student.name.last}`;
//           console.log(this.teachers);

//           studentInfo.records = studentRecords.map((record) => {
//             const teacher = this.teachers.personnel.find(
//               (teacher) => teacher.id === record.teacherId
//             );
//             const subject = this.subjects.subjects.find(
//               (subject) => subject.id === record.subjectId
//             );
//             console.log(subject);

//             return {
//               teacher: `${teacher?.name.first} ${teacher?.name.last}`,
//               subject: subject?.title,
//               lesson: record.lesson,
//               mark: record.mark,
//             };
//           });
//         }
//       }
//     }

//     return studentInfo;
//   }
//   readAll(gradebookId) {
//     if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
//       const gradebook = this.gradebooks[gradebookId];
//       console.log(gradebook);

//       const studInfo = [];
//       for (const record of gradebook.records) {
//         const pupilGroup = this.groups.groups[0];

//         console.log(pupilGroup);
//         const pupil = pupilGroup?.pupils.find(
//           (p) => p.id === record.pupilId.toString()
//         );
//         console.log(pupil);

//         const teacher = this.teachers.personnel.find(
//           (t) => t.id === record.teacherId
//         );
//         const subject = this.subjects.subjects.find(
//           (s) => s.id === record.subjectId
//         );
//         if (pupil && teacher && subject) {
//           studInfo.push({
//             pupil: `${pupil.name.first} ${pupil.name.last}`,
//             teacher: `${teacher.name.first} ${teacher.name.last}`,
//             subject: subject.title,
//             lesson: record.lesson,
//             mark: record.mark,
//           });
//         }
//       }
//       return studInfo;
//     }
//     // return [];
//   }
// }
// export default Gradebooks;

//Plain JS
