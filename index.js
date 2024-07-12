let number = [1,2,3,4,5,6]

function Filterarray(arr,cb){
    let filteredArray = arr.filter(cb);
     return filteredArray;
    }





function isEven(element) {
    // return element % 2 === 0;
    if(element %2===1){
        return true
    }
   else{
    return false
   }



 }

let evenNumber = Filterarray(number, isEven);

console.log("Original array:", number);
console.log("Filtered array (even numbers):", evenNumber);