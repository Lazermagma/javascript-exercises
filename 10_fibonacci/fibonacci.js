
//fibonacci rule n = n-1 + n-2  or n = n1 + n2

// the basic idea that i want to do is to translate the location into the value of fib 

const fibonacci = function(location) {
    
   if (location < 0) return "OOPS";
   if (location === 0) return 0;

let n1 = 0;
let n2 = 1;

   for (let i = 1; i < location ; i++){
         
    const temp = n2 ;
    n2 = n2 + n1 ;
    n1 = temp;

   }

   return n2;
   


};

// Do not edit below this line
module.exports = fibonacci;
