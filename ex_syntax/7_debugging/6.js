const transactionLog = [];

function processInput(input) {
  return parseFloat(input, 10);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  data = processInput(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.');
  }
}

function transactionTotal() {
  let total = 0;
  let i;

  for (i = 0; i < transactionLog.length; i += 1) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
