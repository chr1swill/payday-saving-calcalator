

// subtract the income for expenses [checked]

//  store the total ammout saved as an object i can references [checked]

// the next funcntion will refence that object and divid the total saving by three


function calculatecalculateTotalSavingAmount(transactions, dateOfTransaction, totalEarnings, totalExpenses) {
  const savings = totalEarnings - totalExpenses;

  const transaction = { earnedAmount: totalEarnings, savingsAmount: savings };

  const updatedTransactions = { ...transactions, [dateOfTransaction]: transaction };

  return updatedTransactions;
}

function amountForAccount(transactions, dateOfTransaction) {
    const totalSavedOnDate = transactions[dateOfTransaction]?.saved;

    if (totalSavedOnDate) {
        const dollarSplit = totalSavedOnDate / 3;
        
        return `You need to spend each of your saving accounts $${dollarSplit}`;
    } else {
        return `No transaction found for date ${dateOfTransaction}`;
    }
}

// Usage:
let transactions = {};

transactions = calculateTotalSavingAmount(transactions, '2022-01-01', 1000, 500);
transactions = calculateTotalSavingAmount(transactions, '2022-01-02', 1500, 700);

console.log(amountForAccount(transactions, '2022-01-01')); // you need to spend each of your saving accounts .66666666666666
console.log(amountForAccount(transactions, '2022-01-02')); // you need to spend each of your saving accounts .33333333333334
