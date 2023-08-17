// class Gradebooks {
//   constructor(groups, teachers, subjects) {
//     this.gradebooks = [];
//     this.groups = groups;
//     this.teachers = teachers;
//     this.subjects = subjects;
//   }

//   add(groupId) {
//     const gradebookId = this.gradebooks.length.toString();
//     this.gradebooks.push({ id: gradebookId, groupId, records: [] });
//     return gradebookId;
//   }

//   clear() {
//     this.gradebooks = [];
//   }

//   addRecord(gradebookId, record) {
//     const gradebook = this.gradebooks.find(
//       (gradebook) => gradebook.id === gradebookId
//     );
//     if (!gradebook) {
//       throw new Error("Gradebook not found");
//     }

//     const { pupilId, teacherId, subjectId, lesson, mark } = record;

//     const pupil = this.groups
//       .read(gradebook.groupId)
//       .pupils.find((pupil) => pupil.id === pupilId);
//     const teacher = this.teachers.read(teacherId);
//     const subject = this.subjects.read(subjectId); // Make sure 'read' method exists in the 'Subjects' class

//     if (!pupil || !teacher || !subject) {
//       throw new Error("Invalid pupil, teacher, or subject");
//     }

//     gradebook.records.push({
//       pupil: `${pupil.name.first} ${pupil.name.last}`,
//       teacher: `${teacher.name.first} ${teacher.name.last}`,
//       subject: subject.title,
//       lesson,
//       mark,
//     });
//   }

//   read(gradebookId, pupilId) {
//     const gradebook = this.gradebooks.find(
//       (gradebook) => gradebook.id === gradebookId
//     );
//     if (!gradebook) {
//       throw new Error("Gradebook not found");
//     }

//     const pupil = this.groups
//       .read(gradebook.groupId)
//       .pupils.find((pupil) => pupil.id === pupilId);
//     if (!pupil) {
//       throw new Error("Pupil not found in the group");
//     }

//     const records = gradebook.records
//       .filter(
//         (record) => record.pupil === `${pupil.name.first} ${pupil.name.last}`
//       )
//       .map((record) => ({
//         teacher: record.teacher,
//         subject: record.subject,
//         lesson: record.lesson,
//         mark: record.mark,
//       }));

//     return {
//       name: `${pupil.name.first} ${pupil.name.last}`,
//       records,
//     };
//   }

//   readAll(gradebookId) {
//     const gradebook = this.gradebooks.find(
//       (gradebook) => gradebook.id === gradebookId
//     );
//     if (!gradebook) {
//       throw new Error("Gradebook not found");
//     }

//     return gradebook.records.map((record) => ({
//       teacher: record.teacher,
//       subject: record.subject,
//       lesson: record.lesson,
//       mark: record.mark,
//     }));
//   }
// }

class Gradebooks {
  constructor(groups, teachers, subjects) {
    this.groups = groups;
    this.teachers = teachers;
    this.subjects = subjects;
    this.gradebooks = [];
  }

  add(groupId) {
    const gradebook = {
      groupId,
      records: [],
    };
    this.gradebooks.push(gradebook);
    return this.gradebooks.length - 1;
  }

  clear() {
    this.gradebooks.forEach((gradebook) => {
      gradebook.records = [];
    });
  }

  addRecord(gradebookId, record) {
    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      this.gradebooks[gradebookId].records.push(record);
    }
  }

  read(gradebookId, pupilId) {
    const studentInfo = {
      name: "",
      records: [],
    };

    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      const gradebook = this.gradebooks[gradebookId];
      const studentRecords = gradebook.records.filter(
        (record) => record.pupilId === pupilId
      );
      if (studentRecords.length > 0) {
        const studentGroup = this.groups.groups.find(
          (group) => group.id === gradebook.groupId
        );
        const student = studentGroup.pupils.find(
          (pupil) => pupil.id === pupilId
        );

        studentInfo.name = student.name;
        studentInfo.records = studentRecords.map((record) => {
          const teacher = this.teachers.personnel.find(
            (teacher) => teacher.id === record.teacherId
          );
          const subject = this.subjects.subjects.find(
            (subject) => subject.id === record.subjectId
          );

          return {
            teacher: teacher.name,
            subject: subject.name,
            lesson: record.lesson,
            mark: record.mark,
          };
        });
      }
    }

    return studentInfo;
  }

  readAll(gradebookId) {
    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      const gradebook = this.gradebooks[gradebookId];
      const studentGroup = this.groups.find(
        (group) => group.id === gradebook.groupId
      );

      return studentGroup.pupils.map((pupil) => {
        const studentRecords = gradebook.records.filter(
          (record) => record.pupilId === pupil.id
        );

        return {
          name: pupil.name,
          records: studentRecords.map((record) => {
            const teacher = this.teachers.find(
              (teacher) => teacher.id === record.teacherId
            );
            const subject = this.subjects.find(
              (subject) => subject.id === record.subjectId
            );

            return {
              teacher: teacher.name,
              subject: subject.name,
              lesson: record.lesson,
              mark: record.mark,
            };
          }),
        };
      });
    }

    return [];
  }
}

export default Gradebooks;
