function isLeapYear (year) {

  if (year%400 == 0 || year% 4 == 0 && year % 100 !==0) {
    console.log("its leap year ")
  }
  else {
    console.log("this year not leap year")
  }

}
isLeapYear(2028);