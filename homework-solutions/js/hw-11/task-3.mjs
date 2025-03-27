class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || !/^[a-zA-Z]{2,50}$/.test(value)) {
      throw new Error("First name must be a string with 2-50 Latin characters");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || !/^[a-zA-Z]{2,50}$/.test(value)) {
      throw new Error("Last name must be a string with 2-50 Latin characters");
    }
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error("Salary must be a number between 0 and 10000");
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;

    if (programmingLanguages === 'JavaScript') {
      this.programmingLanguages = ['JavaScript'];
    }
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error("Programming language must be a non-empty string");
    }
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);

    if (typeof designTools === 'string') {
      this.designTools = [designTools];
    } else {
      this.designTools = designTools;
    }
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim() === '') {
      throw new Error("Design tool must be a non-empty string");
    }
    this.designTools.push(tool);
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('The object is not an Employee instance');
    }

    const fullName = employee.getFullName();
    const isNameUnique = !this.#employees.some(emp => emp.getFullName() === fullName);

    if (!isNameUnique) {
      throw new Error(`Employee with name "${fullName}" already exists in the company`);
    }

    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex(emp => emp.firstName === firstName);
    if (index === -1) {
      throw new Error(`Employee with first name "${firstName}" not found`);
    }
    return index;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(emp => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with first name "${firstName}" not found`);
    }
    return employee;
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }

  getEmployeesByProfession(profession) {
    if (profession === "Developer") {
      return this.#employees.filter(emp => emp instanceof Developer);
    } else if (profession === "Manager") {
      return this.#employees.filter(emp => emp instanceof Manager);
    } else if (profession === "Designer") {
      return this.#employees.filter(emp => emp instanceof Designer);
    } else {
      return [];
    }
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company, Designer, Developer, Manager };
