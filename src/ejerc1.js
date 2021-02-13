let allNumbers=[1,3,5,25,19];
let oneNumber=19;


function numbers(numbersArr,number){



  for( i=0; i<numbersArr.length;i++){
      if(numbersArr[i]===number){
          return true;
      
   }
}
    return false;
}  
console.log(numbers(allNumbers,oneNumber));