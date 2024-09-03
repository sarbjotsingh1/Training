package com.mindsprint.inheritance;

class Account {
    int accountId;
    int balance;
    String accountHolderName;

    public Account(int accountId, int balance, String accountHolderName) {
        this.accountId = accountId;
        this.balance = balance;
        this.accountHolderName = accountHolderName;
    }

    public void deposit(int amount) {
        balance += amount;
        System.out.println(amount + " is deposited in " + accountHolderName + " now balance is " + balance);
    }

    public void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println(amount + " is withdrawn from " + accountHolderName + " now balance is " + balance);
        } else {
            System.out.println("Insufficient Balance");
        }
    }
}

class SavingAccount extends Account {
    int rateOfInterest;

    public SavingAccount(int accountId, int balance, String accountHolderName, int rateOfInterest) {
        super(accountId, balance, accountHolderName);
        this.rateOfInterest = rateOfInterest;
    }

    public void calculateInterest() {
        balance += (rateOfInterest * balance) / 100;
        System.out.println("New Balance with interest is : " + balance);
    }

    @Override
    public String toString() {
        return "SavingAccount{" +
                "rateOfInterest=" + rateOfInterest +
                ", accountHolderName='" + accountHolderName + '\'' +
                ", balance=" + balance +
                ", accountId=" + accountId +
                '}';
    }
}

class CurrentAccount extends Account {
    int overDraftLimit;

    public CurrentAccount(int accountId, int balance, String accountHolderName, int overDraftLimit) {
        super(accountId, balance, accountHolderName);
        this.overDraftLimit = overDraftLimit;
    }

    public void withdraw(int amount) {
        if (amount > balance && amount - balance > overDraftLimit) {
            balance -= amount;
            System.out.println(amount + " is withdrawn from " + accountHolderName + " now balance is " + balance);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    @Override
    public String toString() {
        return "CurrentAccount{" +
                "overDraftLimit=" + overDraftLimit +
                ", accountId=" + accountId +
                ", balance=" + balance +
                ", accountHolderName='" + accountHolderName + '\'' +
                '}';
    }
}


public class Bank {
    public static void main(String[] args) {
        SavingAccount s1 = new SavingAccount(1, 1000, "Sarb", 10);
        System.out.println(s1);
        s1.calculateInterest();
        System.out.println(s1);
        CurrentAccount c1 = new CurrentAccount(2, 1000, "Singh", 100);
        System.out.println(c1);
    }
}
