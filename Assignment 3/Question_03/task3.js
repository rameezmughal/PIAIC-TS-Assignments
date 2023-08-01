"use strict";
let name1 = "mUhaMmad mEHboOb AlaM";
let lowercaseName = name1.toLowerCase();
console.log("Lowercase:", lowercaseName);
let uppercaseName = name1.toUpperCase();
console.log("Upper case name:", uppercaseName);
let word = name1.split(" ");
let titleCaseName = "";
for (let i = 0; i < word.length; i++) {
    titleCaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCaseName);
