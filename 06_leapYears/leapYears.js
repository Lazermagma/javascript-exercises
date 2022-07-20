/* algorithm :
function isLeapYear (year):
    if ((year modulo 4 is 0) and (year modulo 100 is not 0))
    or (year modulo 400 is 0)
        then true
    else false
*/


const leapYears = function(year) {

let modFour = year % 4;
let modFourHundred = year % 400;
let modHundred = year % 100;
  if ( modFour == 0 && modHundred != 0){
                
           return true;     
    }
    if (modFourHundred == 0){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
