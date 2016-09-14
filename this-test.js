function add(arr) {
  return arr.reduce(function (p, c) {
    return p + c;
  });
}

var s = add([3, 7, 5]);
//console.log(s);


function add2() {
  var i;
  var tot = 0;

  for (i = 0; i < arguments.length; i++) {
    tot += arguments[i];
  }

  return tot;
}

console.log(add2(1));       // 1
console.log(add2(1, 2));    // 3
console.log(add2(1, 2, 3)); // 6


var num = [1, 4, 5, 7];

console.log(add2.apply(this, num)); // 17

console.log(1 + true);   // '2'
console.log(1 + 'true'); // '1true'



