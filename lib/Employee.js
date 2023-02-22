// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    //Validation for the object inputs

    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Invalid name. Please provide a non-empty string value.");
    }
    if (typeof id !== "number" || isNaN(id) || id < 1) {
      throw new Error("Invalid ID. Please provide a positive integer value.");
    }
    //the test method is a built in method of the RegExp object
    if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error("Invalid email. Please provide a valid email address.");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
