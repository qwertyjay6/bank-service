  
  // src/bank-manager.ts
  import { Customer } from './customer';
  
  export class BankManager {
    constructor(public customers: Customer[]) {}
  
    totalBalance(): number {
      return this.customers.reduce((total, customer) => total + customer.balance, 0);
    }
  
    transferMoney(sender: Customer, recipient: Customer, amount: number): void {
      if (amount <= sender.balance) {
        sender.withdraw(amount);
        recipient.deposit(amount);
      }
    }
  }