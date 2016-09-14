function divide(a, b) {
  return a / b;
}

function divideWOMath(n, d) {
  var q = 0;

  while (n > d) {
    q++;
    n = n - d;
  }

  return q;
}

var x = 4;
var y = 2;

var quotient = divideWOMath(x, y);
console.log('The quotient of ' + x + '/' + y + ' is ' + quotient);

