//functional constructor

function Employee(id, name, department, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.salary = salary;
}

Employee.prototype.diplayDetails = function () {
  console.log(`ID : ${this.id}`);
  console.log(`Name : ${this.name}`);
  console.log(`Department : ${this.department}`);
  console.log(`Salary : ${this.salary}`);
};

const em1 = new Employee(1, "Alex", "IT", 1000000);
const em2 = new Employee(2, "John", "HR", 800000);

em1.diplayDetails();
em2.diplayDetails();
