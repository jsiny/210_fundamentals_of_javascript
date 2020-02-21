function checkGoldbach(n) {
  if (n % 2 === 1 || n < 4) {
    console.log(null);
    return;
  }

  var a = 1;
  var b = n - 1;

  while (a <= b) {
    if (isPrime(a) && isPrime(b)) {
      console.log(a, b);
    }

    a += 1;
    b -= 1;
  }
}

function isPrime(num) {
  if (num < 2) return false;

  for (var i = 2; i < num; i +=1) {
    if (num % i === 0) return false;
  }

  return true;
};

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53