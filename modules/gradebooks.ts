import { Name } from "../utils/validator";
import { Pupil } from "./groups";

interface Teacher {
  id: string;
  name: Name;
}

interface Subject {
  id: string;
  title: string;
}

type Record = {
  pupilId: string;
  teacherId: string;
  subjectId: string;
  lesson: string;
  mark: string;
};

interface Gradebook {
  groupId: string;
  records: Record[];
  id: string;
}

interface Group {
  id: string;
  room: number;
  pupils: Pupil[];
  records: Record[];
  groupId: string;
}

class Gradebooks {
  private groups: { groups: Group[] };
  private teachers: { personnel: Teacher[] };
  private subjects: { subjects: Subject[] };
  private gradebooks: Gradebook[];

  constructor(
    groups: { groups: Group[] },
    teachers: { personnel: Teacher[] },
    subjects: { subjects: Subject[] }
  ) {
    this.groups = groups;
    this.teachers = teachers;
    this.subjects = subjects;
    this.gradebooks = [];
  }

  add(groupId: string): number {
    let foundGroup: Group = this.groups.groups.find((gr) => gr.id === groupId);

    foundGroup.records = [];
    this.gradebooks.push(foundGroup);

    return this.gradebooks.length - 1;
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

            console.log(teacher, "Sdsadsads");

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
  }
}

export default Gradebooks;
