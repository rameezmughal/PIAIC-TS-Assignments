

let numbers: number[] = [1,2,3,4,5,6,7,8,9];
for(let number of numbers){
    let numberEnd: string = "";
    if(number === 1){
        numberEnd = 'st';
        
    }else if(number === 2){
        numberEnd = 'nd';
    }else if(number === 3){
        numberEnd = 'rd';
    }else{
        numberEnd= 'th'
    }
    console.log(`${number}${numberEnd}`);
    

}