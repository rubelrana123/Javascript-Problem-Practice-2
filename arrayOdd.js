// function findOddSum(array) {
//   var total = 0;
//    for ( var i = 0; i < array.length; i++) {
//      var elements = i;
//     //  console.log(elements)
//      var element = array[elements];

//       var total =   total + element;
//      console.log(elements,element , total)
    
//     // console.log(element, result, total);
//    }
   
//    return total;

// }



// function getArrayOdd(number) {
//    const  oddArray =[];
//      for (let i = 0; i < number.length; i++) {
//     const index = i;
//     const element = number[index];
//     // console.log(index, element)
//     if ( element % 2 !==0 ){
//       console.log(index, element)
//       oddArray.push(element);
      
//     }

//   }
//     return oddArray;
// }

// // var sum = [5, 7, 8, 10, 25, 24];
// // findOddSum(sum);

// var oddNumber = [20,23,26,35,65];
// var oddNumberAll = getArrayOdd(oddNumber); 
// console.log(oddNumberAll);

// var oddNumberSum = findOddSum(oddNumberAll);
// console.log(oddNumberSum);



function isOddEvenSum(array) {
  let total = 0;
  for(let i = 0; i<array.length; i++) {
    var index = i;
    var elements = array[i];
    total = total + elements;
    console.log(index , elements, total);
  }
  return total;
}




function get_Odd_Number (array) {
  let oddArray = [ ];
  for (let i = 0; i < array.length; i++) {
    let index = i;
    let elements = array[index];
    
    if (elements%2 == 1) {
      // console.log(index)
      console.log(index,elements);
      oddArray.push(elements);
      //  total = total + elements;
    }
  }
  return oddArray;
}


const oddNumber = get_Odd_Number([5,8,3,4,2,9,,7])
console.log(oddNumber);

var isOddEvenSum= isOddEvenSum(oddNumber);
console.log(isOddEvenSum);