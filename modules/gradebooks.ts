import { Pupil } from "./groups";

interface Group {
  id: string;
  pupils: Pupil[];
}

interface Teacher {
  id: string;
  name: Name;
}

interface Subject {
  id: string;
  title: string;
}

export interface Name {
  first: string;
  last: string;
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
}

export class Gradebooks {
  private groups: Group[];
  private teachers: Teacher[];
  private subjects: Subject[];
  private gradebooks: Gradebook[];

  constructor(groups: Group[], teachers: Teacher[], subjects: Subject[]) {
    this.groups = groups;
    this.teachers = teachers;
    this.subjects = subjects;
    this.gradebooks = [];
  }

  add(groupId: string): number {
    const gradebook: Gradebook = {
      groupId,
      records: [],
    };
    this.gradebooks.push(gradebook);
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

    if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
      const gradebook = this.gradebooks[gradebookId];
      const studentRecords = gradebook.records.filter(
        (record) => record.pupilId === pupilId
      );
      if (studentRecords.length > 0) {
        const studentGroup = this.groups.find(
          (group) => group.id === gradebook.groupId
        );
        const student = studentGroup?.pupils.find(
          (pupil) => pupil.id === pupilId
        );

        if (student) {
          studentInfo.name = `${student.name.first} ${student.name.last}`;
          studentInfo.records = studentRecords.map((record) => {
            const teacher = this.teachers.find(
              (teacher) => teacher.id === record.teacherId
            );
            const subject = this.subjects.find(
              (subject) => subject.id === record.subjectId
            );

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
        const pupilGroup = this.groups[0];
        const pupil = pupilGroup?.pupils.find((p) => p.id === record.pupilId);

        const teacher = this.teachers.find((t) => t.id === record.teacherId);

        const subject = this.subjects.find((s) => s.id === record.subjectId);

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

    return [];
  }
}

export default Gradebooks;
