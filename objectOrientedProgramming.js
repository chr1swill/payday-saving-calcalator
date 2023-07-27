class TransactionManager {
    constructor() {
      this.transactions = {};
    }
  
    calculateTotalSavingAmount(dateOfTransaction, totalEarnings, totalExpenses) {
      const savings = totalEarnings - totalExpenses;
      const transaction = { earnedAmount: totalEarnings, savingsAmount: savings };
      this.transactions[dateOfTransaction] = transaction;
      return this.transactions;
    }
  
    amountForAccount(dateOfTransaction) {
      const totalSavedOnDate = this.transactions[dateOfTransaction]?.savingsAmount;
      if (totalSavedOnDate) {
        const dollarSplit = totalSavedOnDate / 3;
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
  