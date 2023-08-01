let magicians_Name:string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians2(magicians:string[]){
    for(let magician of magicians){
        console.log(magician);
        
    }
}


function make_great(magician:string[]){
    magician.forEach((magicians) => {
        console.log(`\n${magicians} the Great\n`);
        
    })
}
show_magicians2(magicians_Name);
console.log("\n---------------------------------------------------------------\n");
make_great(magicians_Name);