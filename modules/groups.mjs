class Groups {
  constructor() {
    this.groups = [];
  }

  add(room) {
    if (!room || typeof room !== "number")
      throw new Error("Valid room number should be provided");
    const id = Math.random().toString(36).substr(2, 9);
    this.groups.push({ id, room, pupils: [] });
    return id;
  }

  addPupil(groupId, pupil) {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.pupils.push(pupil);
    }
  }

  removePupil(groupId, pupilId) {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.pupils = group.pupils.filter((pupil) => pupil.id !== pupilId);
    }
  }

  update(groupId, updatedData) {
    const group = this.groups.find((group) => group.id === groupId);
    if (group) {
      group.room = updatedData.room;
    }
  }

  read(groupId) {
    return this.groups.find((group) => group.id === groupId);
  }

  readAll() {
    return this.groups.map((group) => ({
      id: group.id,
      room: group.room,
      pupils: group.pupils,
    }));
  }
}

export default Groups;
