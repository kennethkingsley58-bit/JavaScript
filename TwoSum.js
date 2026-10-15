let numbers = [2, 7, 8, 5]
let target = 9;

 for(let index = 0; index < numbers.length; index++){
        for (let count = index + 1; count < numbers.length; count++){
             if (numbers[count] + numbers[index] == target){
                 console.log ([index, count]);
       }
   }
}
        
       

            

      










        
