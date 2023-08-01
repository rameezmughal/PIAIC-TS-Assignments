"use strict";
let magician_Name = ['Alice', 'Bob', 'Charlie', 'David Copperfield', 'Harry Houdini'];
function make_great1(magician) {
    let greatMagician = [];
    for (let magicians of magician) {
        greatMagician.push(`${magicians} the Great.`);
    }
    return greatMagician;
}
let greatMagician = make_great1(magician_Name);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
console.log("\nOriginal Magicians: \n");
show_magicians(magician_Name);
console.log("--------------------------------------------------------------------------");
console.log("\nGreat Magicians: \n");
show_magicians(greatMagician);
