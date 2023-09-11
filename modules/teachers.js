import { validateProfile, } from "../utils/validator.js";
import Personnel from "./personnel.js";
class Teachers extends Personnel {
    constructor() {
        super();
    }
    add(profile) {
        validateProfile(profile, true);
        const teacherId = this.personnel.length.toString();
        const teacherWithId = Object.assign(Object.assign({}, profile), { id: teacherId });
        this.personnel.push(teacherWithId);
        return teacherId;
    }
}
export default Teachers;
