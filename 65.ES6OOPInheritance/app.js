//! INHERITANCE KAVRAMI (MİRAS ALMA) KAVRAMI

class Person {
    firstName = "Fatma";

    write() {
        console.log("Person write: ", this.firstName);
    }
}

class Student extends Person {
    write() {
        console.log("Student write: ", this.firstName);
        super.write();
    }
}
const student1 = new Student();
student1.write();

