const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));
let input = true
while(input){
    if(Number.isNaN(number)){
        number = Number(prompt("Ogbeni Enter a Valid Number: "));
        continue;
    }
    else{

        for(let index = 1; index <= 12; index++){ 
        let multiplication = number * index;
        console.log(number + "x" + index + "=" + multiplication)
      }
  }
break;
}
