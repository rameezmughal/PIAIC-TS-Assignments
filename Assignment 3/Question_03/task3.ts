

let name1: string = "mUhaMmad mEHboOb AlaM";


 let lowercaseName = name1.toLowerCase();
 console.log("Lowercase:", lowercaseName)


 let uppercaseName = name1.toUpperCase();
 console.log("Upper case name:", uppercaseName)


let word: string[] = name1.split(" ");
let titleCaseName: string = "";
for(let i = 0 ; i < word.length; i++){
    titleCaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() +" "

};
console.log(titleCaseName);
