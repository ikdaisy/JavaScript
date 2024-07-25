let arr=['hello',2,false,true,43]
console.log(arr);
console.log(typeof(arr));
console.log(arr.indexOf(2));
console.log(arr.length);
console.log(arr[3]);

// arr.push('bye')
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr[1]=78
// console.log(arr);

// arr[arr.indexOf('true')]= 'hell '
// console.log(arr);

// arr.splice(2,1)
// console.log(arr);


arr.splice(arr.indexOf(false),1)
console.log(arr);

console.log(arr.reverse());

