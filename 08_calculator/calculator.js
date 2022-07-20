const add = function(n1 , n2) {

  return n1 + n2 ;
	
};

const subtract = function(n2 , n1) {

  return n2 - n1;
	
};


 
const sum = function(arrNumbers) {
    
  let adder = 0;
  for (let value of arrNumbers){
    adder = adder + value ;
  }
  return adder;
	
};

const multiply = function(arrNumbers) {

 let mulitplier = 1;
  for ( let value of arrNumbers ){
    mulitplier = mulitplier * value;
  }
      return mulitplier;

};

const power = function(n,p) {

  return n**p;
	
};

const factorial = function(n) {
 
  if(n == 0 || n == 1){
    return 1;

}else{
    return n * factorial(n-1);
}
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
