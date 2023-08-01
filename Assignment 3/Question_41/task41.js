"use strict";
let magiciansNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function showMagicians(magician) {
    for (let magicians of magician) {
        console.log(magicians);
    }
}
;
showMagicians(magiciansNames);
