"use strict";
const places = ["Pakistan", "Bangladash", "India", "Sudia Arabia", "Qatar"];
console.log("\nOriginal Order: \n", places);
places.sort();
console.log("\nAlphabetical order: \n", places);
console.log("\nShow that your array is still in its original order: \n", places);
places.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order: \n", places);
console.log("\nArray is still in its original order: \n", places);
places.reverse();
console.log("\nReverse the order: \n", places);
places.reverse();
console.log("\nReverse the order again: \n", places);
places.sort();
console.log("\nAlphabetical order: \n", places);
places.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order: \n", places);
