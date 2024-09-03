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
    console.log("Diposted");
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

class SavingAccount extends Account {
  constructor(acc_holder_name, acc_no, balance, intrest) {
    super(acc_holder_name, acc_no, balance);
    this.intrest = intrest;
  }
  dipost(amount) {
    const intrestAmount = (amount * this.intrest) / 100;
    super.dipost(amount + intrestAmount);
  }
  displayMethod() {
    super.displayMethod();
    console.log(`Interst rate : ${this.intrest}`);
  }
}

class CurrentAccount extends Account {
  constructor(acc_holder_name, acc_no, balance, overDraftLimit = 500) {
    super(acc_holder_name, acc_no, balance);
    this.overDraftLimit = overDraftLimit;
  }
  withdraw(amount) {
    if (this.balance >= this.balance + this.overDraftLimit)
      super.withdraw(amount);
    else console.log("No sufficent Balance");
  }
  displayMethod() {
    super.displayMethod();
    console.log(`OverDraftLimit : ${this.overDraftLimit}`);
  }
}

// const acc1 = new Account("sarb", 1, 0);
// const acc2 = new Account("sarbjot", 4, 0);
// const sacc1 = new SavingAccount("singh", 5, 100);
// sacc1.displayMethod();
// // acc1.dipost(100);
// // acc1.withdraw(50);
// // acc2.checkBalance();
// // acc1.displayMethod();

class UserInterface {
  constructor() {
    this.acc = null;
  }
  createAccount() {
    this.acc = new SavingAccount("Sarbjot", "123", 100, 0.04);
  }
  getBalance() {
    console.log(this.acc.checkBalance());
  }
  displayMethod() {
    this.acc.displayMethod();
  }
  dipost(amount) {
    this.acc.dipost(amount);
  }
  withdraw(amount) {
    this.acc.withdraw(amount);
  }
}

const ui = new UserInterface();
ui.createAccount();
ui.dipost(100);
ui.withdraw(50);
ui.displayMethod();
