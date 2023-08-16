"use strict";

class Gradebooks {
  constructor(groups, teachers, subjects) {
    this.groups = groups;
    this.teachers = teachers;
    this.subjects = subjects;
    this.gradebooks = [];
  }
  add(groupId) {
    const gradebookId = this.gradebooks.length.toString();
    this.gradebooks.push({
      id: gradebookId,
      groupId: groupId,
      records: [],
    });
    return gradebookId;
  }
  clear(gradebookId) {
    this.gradebooks = [];
  }
  addRecord(gradebookId, record) {}
  addRecord(gradebookId, record) {
    const gradebook = this.gradebooks.find((gb) => gb.id === gradebookId);
    if (!gradebook) {
      throw new Error("Gradebook not found");
    }

    const pupil = this.groups
      .read(gradebook.groupId)
      .pupils.find((p) => p.id === record.pupilId);
    const teacher = this.teachers.read(record.teacherId);
    const subject = this.subjects.read(record.subjectId);

    if (!pupil || !teacher || !subject) {
      throw new Error("Invalid pupil, teacher, or subject");
    }

    gradebook.records.push({
      pupil: `${pupil.name.first} ${pupil.name.last}`,
      teacher: `${teacher.name.first} ${teacher.name.last}`,
      subject: subject.title,
      lesson: record.lesson,
      mark: record.mark,
    });
  }

  read(gradebookId, pupilId) {
    const gradebook = this.gradebooks.find((gb) => gb.id === gradebookId);
    if (!gradebook) {
      throw new Error("Gradebook not found");
    }

    const pupil = this.groups
      .read(gradebook.groupId)
      .pupils.find((p) => p.id === pupilId);
    if (!pupil) {
      throw new Error("Pupil not found");
    }

    const records = gradebook.records
      .filter(
        (record) => record.pupil === `${pupil.name.first} ${pupil.name.last}`
      )
      .map(({ teacher, subject, lesson, mark }) => ({
        teacher,
        subject,
        lesson,
        mark,
      }));

    return {
      name: `${pupil.name.first} ${pupil.name.last}`,
      records: records,
    };
  }

  readAll(gradebookId) {
    const gradebook = this.gradebooks.find((gb) => gb.id === gradebookId);
    if (!gradebook) {
      throw new Error("Gradebook not found");
    }

    const pupils = this.groups.read(gradebook.groupId).pupils;
    const records = [];

    pupils.forEach((pupil) => {
      const pupilRecords = gradebook.records
        .filter(
          (record) => record.pupil === `${pupil.name.first} ${pupil.name.last}`
        )
        .map(({ teacher, subject, lesson, mark }) => ({
          teacher,
          subject,
          lesson,
          mark,
        }));

      records.push({
        name: `${pupil.name.first} ${pupil.name.last}`,
        records: pupilRecords,
      });
    });

    return records;
  }
}

export default Gradebooks;
