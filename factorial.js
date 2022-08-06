// function factorial(number) {

//   let factNumber = 1;
//   for (let i = 1; i<=number; i++){
//     factNumber = factNumber *i;

//   }
//   return factNumber;

// }
// console.log(factorial(5));

// function factNumber (number) {
//   var factorial = 1;
//   for (let i = 1; i<= number; i++) {
//     var factorial = factorial * i;
//     // console.log(factorial);
//   }
//   return factorial;

// }
// var factorial = (factNumber(5));
// console.log(factorial);

// function factorial(number) {
//   var factNumber = 1;
//   var i =1;
//   while (i <= number) {
//     factNumber = factNumber * i;
//     i++
//   }
//   return factNumber;
// }
// var result = (factorial(6));
// console.log(result);

function factorial(num) {
  var factNumber = 1;
   
  for ( var i =1; i <=6; i++) {
    const index = i;
    factNumber = factNumber * i;
    console.log(index, factNumber);

  }
  return factNumber;
}
console.log(factorial(5));


 
// function factorial(num) {
//   var factNumber = 1;
   
//   for ( var i =num; i > 1; i--) {
//     const index = i;
//     console.log(index);
//     factNumber = factNumber * i;

//   }
//   return factNumber;
// }
// console.log(factorial(5));