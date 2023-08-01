
let fruit1 = "apple"
let fruit2 = "MANGO"
console.log(`\nThis is Equality: ${"apple" === "apple"}\n`);
console.log(`\nThis is inequality: ${fruit1 === fruit2}\n`);



console.log("\nThis is lowercase: ",fruit2.toLocaleLowerCase() === 'mango');

console.log(`\nThis is lowercase but false: `, "BANANA".toLocaleLowerCase() === "apple");


console.log(`\nThis is equality 5 === 5 is: `, 5 === 5);
console.log(`\n This is inequality 5 !== 5 is :`, 5 !== 5);


console.log(`\nThis is greater than 6 > 5: `, 6 > 5);
console.log(`\nThis is greater than 5 > 6: `, 5 > 6);
console.log(`\nThis is less than 6 < 5: `, 6 > 5);
console.log(`\nThis is less than 5 < 5: `, 5 < 5);


console.log(`\nThis is greater than or equal  6 >= 5: `, 6 >= 5);
console.log(`\nThis is greater than or equal 5 >= 6: `, 5 >= 6);


console.log(`\nThis is less than or equal 5 <= 6: `, 5 <= 6);
console.log(`\nThis is less than or equal 6 <= 5: `, 6 <= 5);


console.log("\nThis is && Operator");

console.log(`\n5 > 4 && 4 < 5: `, 5 > 4 && 4 < 5);
console.log(`\n5 > 4 && 4 < 5: `, 5 > 4 && 4 > 5);

console.log("\nThis is Or Operator");

console.log(`\n5 > 4 || 4 < 5: `, 5 > 4 || 4 > 5);
console.log(`\n5 > 4 || 4 < 5: `, 5 < 4 || 4 >= 5);


let items:string[] = ['Mango', 'Apple', "Watermelon", 'Banana'];

console.log(items);


console.log(`\nThis apple index in Array === 1: `,items.indexOf('Apple') === 1);


console.log(`\nThis Grapes index is not in Array: `,!items.indexOf('Grapes'));



