const ftoc = function(fDegree) {
  
  let cDegree = (fDegree - 32) * (5/9)
  let rounded = parseFloat(cDegree.toFixed(1));
  return rounded;

};

const ctof = function(cDegree) {
  
   let fDegree = (cDegree * (9/5)) + 32;
 let rounded = parseFloat(fDegree.toFixed(1)) ;
   return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
