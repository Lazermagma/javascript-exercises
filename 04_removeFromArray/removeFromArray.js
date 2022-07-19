
const removeFromArray = function(arr,...targets) {
    targets.forEach(target => {

        let targetIndex = arr.indexOf(target);
   if (targetIndex >-1){
        arr.splice(targetIndex,1);
    
   }
    });
   
    return arr;
};

 

// Do not edit below this line
module.exports = removeFromArray;
