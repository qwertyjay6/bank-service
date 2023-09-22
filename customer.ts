// src/customer.ts
export class Customer {
    constructor(public name: string, public balance: number) {}
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      }
    }
  
    checkBalance(): number {
      return this.balance;
    }
  }
  
