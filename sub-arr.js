Array.prototype.allSubArrays = function allSubArrays(width) {
  var w = width;
  var allArr = [];
  var i;
  var len;

  if (w) {
    w = Math.min(w, this.length);

    for (i = 0, len = this.length - w + 1; i < len; ++i ) {
      allArr.push(this.slice(i, i + w));
    }
  } else {
    for (w = 1; w < this.length; ++w) {
      allArr = allArr.concat(this.allSubArrays(w));
    }
  }

  return allArr;
};

console.log([1, 2, 3, 4].allSubArrays(1)); // [ [1], [2], [3], [4] ]
console.log([1, 2, 3, 4].allSubArrays(2)); // [ [1, 2], [2, 3], [3, 4] ]
console.log([1, 2, 3, 4].allSubArrays(3)); // [ [1, 2, 3], [2, 3, 4] ]

console.log([1, 2, 3, 4].allSubArrays(4)); // [ [1, 2, 3, 4] ]
console.log([1, 2, 3, 4].allSubArrays(5)); // [ [1, 2, 3, 4] ]
console.log([1, 2, 3, 4].allSubArrays(6)); // [ [1, 2, 3, 4] ]

console.log([1, 2, 3, 4].allSubArrays()); // [ [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4] ]
console.log([1, 2, 3, 4].allSubArrays(0)); // [ [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4] ]

console.log([1, 2, 3, 4, 5, 6].allSubArrays(2)); // [ [1, 2], [2, 3], [3, 4], [4, 5], [5, 6] ]


Array.prototype.maxSumSubArray = function maxSumSubArray() {
  var max;

  var subArr = this.allSubArrays(1);

};