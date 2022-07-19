const repeatString = function(Str,num) {

/* first solution

Str = Str.repeat(num);
return Str;

*/
// second solution 
let text ='';
let i = num ;

if ( i >= 0){
while ( i > 0){
   
  text += Str;

 i--;
}

return text;
}
else if (i < 0){
    return 'ERROR';
}
};

// Do not edit below this line
module.exports = repeatString;
