import { BankManager } from './bank-manager';
import { Customer } from './customer';

describe('BankManager', () => {
  it('should transfer money between customers', () => {
    const customer1 = new Customer('Alice', 100);
    const customer2 = new Customer('Bob', 200);
    const bankManager = new BankManager([customer1, customer2]);

    // Transfer 50 from Alice to Bob
    bankManager.transferMoney(customer1, customer2, 50);

    expect(customer1.checkBalance()).toBe(50); // Alice should have 50 left
    expect(customer2.checkBalance()).toBe(250); // Bob should have 250 now
  });

  it('should not allow transfers if sender has insufficient balance', () => {
    const customer1 = new Customer('Alice', 100);
    const customer2 = new Customer('Bob', 200);
    const bankManager = new BankManager([customer1, customer2]);

    // Try to transfer 150 from Alice to Bob, but Alice only has 100
    bankManager.transferMoney(customer1, customer2, 150);

    expect(customer1.checkBalance()).toBe(100); // Alice should still have 100
    expect(customer2.checkBalance()).toBe(200); // Bob's balance should remain unchanged
  });

  it('should not allow transfers if sender has insufficient balance (edge case)', () => {
    const customer1 = new Customer('Alice', 0); // Alice has no money
    const customer2 = new Customer('Bob', 200);
    const bankManager = new BankManager([customer1, customer2]);

    // Try to transfer 50 from Alice to Bob, but Alice has 0
    bankManager.transferMoney(customer1, customer2, 50);

    expect(customer1.checkBalance()).toBe(0); // Alice's balance should still be 0
    expect(customer2.checkBalance()).toBe(200); // Bob's balance should remain unchanged
  });
});