let arr = [1,2,3,4,5,6]

console.log(arr[5]);
console.log("length before deleting: " + arr.length);
delete(arr[5])
console.log("length after deleting: " + arr.length);


// In javascript even after using the delete it doesn't change the memeory allocated for the array so the length of the array has remained same


