/* Algorithm :

1.get length of Str 
2.print the last char which is the length of str in the beginning 
3. decrement the length of str 
4.repeat the process 
*/



const reverseString = function(Str) {

let StrLength =  Str.length;
let ReversedString = '';

while ( StrLength >= 0)
{
   
   ReversedString = ReversedString + Str.charAt(StrLength);
    StrLength--;
}
return ReversedString;


};

// Do not edit below this line
module.exports = reverseString;
