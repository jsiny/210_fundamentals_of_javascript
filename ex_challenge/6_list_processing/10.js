var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, transactions) {
  return transactions.filter(inventory => inventory.id === id);
}

function computeQuantity(transactions) {
  return transactions.reduce((total, transaction) => {
    if (transaction.movement === 'in') {
      return total + transaction.quantity;
    } else {
      return total - transaction.quantity;
    }
  }, 0)
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  let quantity = computeQuantity(itemTransactions);
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
