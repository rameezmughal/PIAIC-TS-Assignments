import { log } from "console";

const prompt = require('prompt-sync')();//this is used for prompt to take input from user



function Grades(english:number,programming:number,PS:number,discrete:number)
{
    let totalMarks=400;
    let obtainedMarks=english+programming+PS+discrete;
    let percentage=(obtainedMarks/totalMarks)*100;

    if(percentage>=90&&percentage<=100)
    {
        console.log(`Grade : A+ 
Percentage : ${percentage};
Remarks: Extra Ordinary `)
    }

    
else if(percentage>=80&&percentage<=89)
{
    console.log(`Grade : A
Percentage : ${percentage};
Remarks: Excellent `) 
}

else if(percentage>=70&&percentage<=79)
{
    console.log(`Grade : B
Percentage : ${percentage};
Remarks: Welldone `) 
}

else if(percentage>=60&&percentage<=69)
{
    console.log(`Grade : C
Percentage : ${percentage};
Remarks: Good `) 
}

else if(percentage>=50&&percentage<=59)
{
    console.log(`Grade : D
Percentage : ${percentage};
Remarks: Pass `) 
}

else
{
    console.log(`Grade : F
Percentage : ${percentage};
Remarks: Fail `) 
}
}

console.log("Enter Marks of Subject out of 100\n")
 let english=Number(prompt("Marks of English: "));
let  programming=Number(prompt("Marks of Programming Fundamentals: "));
 let PS=Number(prompt("Marks of Pakistan Studies: "));
 let discrete=Number(prompt("Marks of Discrete Structures: "));
console.log("\n");
Grades(english,programming,PS,discrete);