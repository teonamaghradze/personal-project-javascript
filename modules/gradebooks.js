export class Gradebooks {
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
        this.gradebooks = [];
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
            const studentRecords = gradebook.records.filter((record) => record.pupilId === pupilId);
            if (studentRecords.length > 0) {
                const studentGroup = this.groups.find((group) => group.id === gradebook.groupId);
                const student = studentGroup === null || studentGroup === void 0 ? void 0 : studentGroup.pupils.find((pupil) => pupil.id === pupilId);
                if (student) {
                    studentInfo.name = `${student.name.first} ${student.name.last}`;
                    studentInfo.records = studentRecords.map((record) => {
                        const teacher = this.teachers.find((teacher) => teacher.id === record.teacherId);
                        const subject = this.subjects.find((subject) => subject.id === record.subjectId);
                        return {
                            teacher: `${teacher === null || teacher === void 0 ? void 0 : teacher.name.first} ${teacher === null || teacher === void 0 ? void 0 : teacher.name.last}`,
                            subject: subject === null || subject === void 0 ? void 0 : subject.title,
                            lesson: record.lesson,
                            mark: record.mark,
                        };
                    });
                }
            }
        }
        return studentInfo;
    }
    readAll(gradebookId) {
        if (gradebookId >= 0 && gradebookId < this.gradebooks.length) {
            const gradebook = this.gradebooks[gradebookId];
            const studInfo = [];
            for (const record of gradebook.records) {
                const pupilGroup = this.groups[0];
                const pupil = pupilGroup === null || pupilGroup === void 0 ? void 0 : pupilGroup.pupils.find((p) => p.id === record.pupilId);
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
