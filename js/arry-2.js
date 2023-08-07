let sum = [];

function call(a, b, c) {
  let call = b;

  for(let i = 1; i <= a; i++) {
    sum[0] = b;
    sum[1] = c;
    call += sum[i];
    sum.push(call);
  }
  return sum;
}

let summa = sum(5, 2, 3);

console.log(summa);