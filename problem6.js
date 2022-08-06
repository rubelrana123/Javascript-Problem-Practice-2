function findLeapYear(year) {
	let leapYearArray = [];

	for (let i = 0; i < year.length; i++) {
		 var  index = i;
   	var elements = year[index];
    // console.log(index, elements);
		if ((0 == elements % 4 && 0 != elements % 100) || 0 == elements % 400) {
      console.log(elements);
      leapYearArray.push(elements);
		
	
      
		}
	}
  return leapYearArray;
}

console.log(findLeapYear([2022, 2023,2024,2025, 2028, 2030]));
//  findLeapYear([2022,2025,2028,2030]);
