var array = [1, 2, 3, 4, 5];
array[array.length] = "6";
console.log(array);

var array = [1, 2, 3, 4, 5, 6, 7];
array.length = array.length - 1;
console.log(array);

var array = [1, 2, 3, 4, 5, 6, 7];
array.shift(9);
console.log(array);

var array = [1, 2, 3, 4, 5, 6, 7];
array.unshift(9);
console.log(array);

