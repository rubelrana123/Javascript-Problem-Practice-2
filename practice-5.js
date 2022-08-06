function evenOdd(array) {

  let total = 0;

  for(let i =0; i < array.length; i++){
    const index = i;
    const elements = array[index];
    total = total + elements;

    console.log(index,elements,total)
  }
  return total;
}



function oddSum (numbers) {

  let oddArray = [ ];

  for ( let i = 0; i < numbers.length; i++) {
    const numberIndex = i;
   const arrayElements =  numbers[numberIndex];

    if ( arrayElements% 2 !==0){
          oddArray.push (arrayElements)
    console.log(numberIndex, arrayElements);
    }


  }
  return oddArray;
}

 let oddarray = oddSum([5, 4, 9, 3, 5, 2, 8, 2, 7]);
 console.log(oddarray);


const oddevenNumberSum = evenOdd(oddarray);
console.log(' total array sum' + ' ' + oddevenNumberSum);