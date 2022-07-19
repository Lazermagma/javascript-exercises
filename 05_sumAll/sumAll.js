/* algorithm : 1. sum = n2(n2 + n1) / 2
               2. while  n2 and n1  < 0 put the equation 
               3. if n1 > n2 change the values with each other 
               4. return sum   */


const sumAll = function(n1 , n2) {


    if ( !Number.isInteger(n1) || !Number.isInteger(n2) ){
        return 'ERROR';

    }
     if (n1 > n2 ){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }

  

    if (n2 && n1 > 0) 
    {
        let sum = (n2 * ( n2 + n1))/ 2;
        return sum;
    }
   
    else {
        return 'ERROR';
    }
    
      
   

};



// Do not edit below this line
module.exports = sumAll;
