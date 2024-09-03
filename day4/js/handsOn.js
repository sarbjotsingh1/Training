class Account {
  constructor(acc_holder_name, acc_no, balance) {
    this.acc_holder_name = acc_holder_name;
    this.acc_no = acc_no;
    this.balance = balance;
  }
  displayMethod = function () {
    console.log(`Name : ${this.acc_holder_name}`);
    console.log(`Number : ${this.acc_no}`);
    console.log(`Balance : ${this.balance}`);
  };
  dipost = function (amount) {
    this.balance = this.balance + amount;
    console.log("Diposted")
  };
  withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      console.log(`${amount} of ${this.acc_holder_name} withdrawan`);
    } else {
      console.log("Balance is insufficent");
    }
  };
  checkBalance = function () {
    console.log(`Balance of ${this.acc_holder_name} is${this.balance}`);
  };
}

const acc1 = new Account("sarb", 1, 0);
const acc2 = new Account("sarbjot", 4, 0);
acc1.dipost(100);
acc1.withdraw(50);
acc2.checkBalance();
acc1.displayMethod();
