
function reverse(str){
let length = str.length;
let reversed = '';

     while (length >= 0) {
        
        reversed += str.charAt(length);
         
        length --;
     }
     
     return  reversed ;


}

function caseInsensitive(str){
    
    let UpperCase = str.toUpperCase();

    return UpperCase ;

}


const palindromes = function (str) {
   
    str = caseInsensitive(str).replace(/[^A-Z]/g,"") ;
    let newStr = caseInsensitive(reverse(str));
  // newStr = newStr.replace(/[^A-Z]/,"");
   if (str == newStr) 
    {
        return true ;
    }

    else { 
        return false ;
    }
        
};

 
 


// Do not edit below this line
module.exports = palindromes;



