class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
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

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || !/^[a-zA-Z\s]+$/.test(value) || value.trim() === '') {
      throw new Error("Profession must be a non-empty string with Latin characters and spaces only");
    }
    this._profession = value;
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
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('The object is not an Employee instance');
    }
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

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
