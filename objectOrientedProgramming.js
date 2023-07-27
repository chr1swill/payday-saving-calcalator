class Transaction {
  constructor(earnedAmount, savingsAmount) {
    this.earnedAmount = earnedAmount;
    this.savingsAmount = savingsAmount;
  }
}

class TransactionManager {
  constructor() {
    this.transactions = {};
  }

  calculateTotalSavingAmount(dateOfTransaction, totalEarnings, totalExpenses) {
    const savings = totalEarnings - totalExpenses;
    const transaction = new Transaction(totalEarnings, savings);
    this.transactions[dateOfTransaction] = transaction;
    return this.transactions;
  }

  amountForAccount(dateOfTransaction) {
    const transaction = this.transactions[dateOfTransaction];
    if (transaction) {
      const dollarSplit = transaction.savingsAmount / 3;
      return `You need to spend each of your saving accounts $${dollarSplit}`;
    } else {
      return `No transaction found for date ${dateOfTransaction}`;
    }
  }
}

// Usage:
const transactionManager = new TransactionManager();
transactionManager.calculateTotalSavingAmount('2021-10-15', 1000, 500);
console.log(transactionManager.amountForAccount('2021-10-15'));
