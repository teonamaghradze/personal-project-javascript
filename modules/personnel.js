import { validateProfile } from "../utils/validator.js";
class Personnel {
    constructor() {
        this.personnel = [];
    }
    add(profile) {
        validateProfile(profile);
        const personnelId = this.personnel.length.toString();
        const personnelWithId = Object.assign(Object.assign({}, profile), { id: personnelId });
        this.personnel.push(personnelWithId);
        return personnelId;
    }
    read(personnelId) {
        return this.personnel.find((personnel) => personnel.id === personnelId);
    }
    update(personnelId, updatedProfile) {
        const index = this.personnel.findIndex((personnel) => personnel.id === personnelId);
        if (index === -1) {
            throw new Error("Personnel not found");
        }
        this.personnel[index] = Object.assign(Object.assign({}, updatedProfile), { id: personnelId });
    }
    remove(personnelId) {
        this.personnel = this.personnel.filter((personnel) => personnel.id !== personnelId);
    }
}
export default Personnel;
