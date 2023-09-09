export function validateSubject(subject) {
    if (!subject || typeof subject !== "object") {
        throw new Error("Parameter must be valid and must be an object");
    }
    if (!subject.title || typeof subject.title !== "string") {
        throw new Error("Subject title must be valid and must be a string");
    }
    if (!subject.lessons || typeof subject.lessons !== "number") {
        throw new Error("Lessons type must be a number");
    }
    if (subject.description !== undefined &&
        typeof subject.description !== "string") {
        throw new Error("Description must be a string");
    }
}
function validateEmail(emails) {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    checkPrimaryUniqueness(emails);
    if (!emailReg.test(emails[0].email)) {
        throw new Error("Invalid email format. Please enter a valid email address.");
    }
    if (typeof emails[0].primary !== "boolean") {
        throw new Error("Primary must be true or false");
    }
}
function checkPrimaryUniqueness(contact) {
    const contactQuantity = contact.filter((item) => item.primary);
    if (contactQuantity.length > 1) {
        throw new Error("Primary email and phone should not be more than 1");
    }
}
export function validateProfile(profile, teacher = false) {
    const phonePattern = /^\+995\d{9}$/;
    const dateOfBirthReg = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const { name, dateOfBirth, emails, phones, sex, subjects } = profile;
    if (typeof name.first !== "string") {
        throw new Error("Profile first name must be a string");
    }
    if (typeof name.last !== "string") {
        throw new Error("Profile last name must be a string");
    }
    if (typeof sex !== "string" || !["male", "female"].includes(sex)) {
        throw new Error("Profile sex must be a string and male/female");
    }
    if (typeof dateOfBirth !== "string" || !dateOfBirthReg.test(dateOfBirth)) {
        throw new Error("Invalid date of birth format. Please use DD/MM/YYYY format.");
    }
    if (teacher) {
        validateEmail(emails);
        if (subjects) {
            validateSubjects(subjects);
        }
    }
    checkPrimaryUniqueness(phones);
    if (typeof phones[0].phone !== "string" ||
        !phonePattern.test(phones[0].phone)) {
        throw new Error("Invalid phone number format. Please enter a valid phone number like +995XXXXXXXXX.");
    }
    if (typeof phones[0].primary !== "boolean") {
        throw new Error("Primary must be true or false");
    }
}
function validateSubjects(subjects) {
    if (!subjects) {
        throw new Error("Subjects must be provided");
    }
    subjects.forEach((subj) => {
        if (typeof subj.title !== "string" && typeof subj.subject !== "string") {
            throw new Error("Title or Subject must be a string");
        }
    });
}
