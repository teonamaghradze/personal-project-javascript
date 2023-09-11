import { Name } from "../utils/validator";

export interface Group {
  id: string;
  room: number;
  pupils: Pupil[];
}

export interface Pupil {
  id: string;
  name: Name;
}

export class Groups {
  private groups: Group[];

  constructor() {
    this.groups = [];
  }

  add(room: number): string {
    if (!room || typeof room !== "number") {
      throw new Error("Valid room number should be provided");
    }
    const id = Math.random().toString(36).substr(2, 9);
    this.groups.push({ id, room, pupils: [] });
    return id;
  }

  addPupil(groupId: string, pupil: Pupil): void {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.pupils.push(pupil);
      console.log(pupil, "teona");
    }
  }

  removePupil(groupId: string, pupilId: string): void {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.pupils = group.pupils.filter((pupil) => pupil.id !== pupilId);
    }
  }

  update(groupId: string, updatedData: { room: number }): void {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.room = updatedData.room;
    }
  }

  read(groupId: string): Group | undefined {
    return this.groups.find((group) => group.id === groupId);
  }

  readAll(): Group[] {
    return this.groups.map((group) => ({
      id: group.id,
      room: group.room,
      pupils: group.pupils,
    }));
  }
}

export default Groups;
