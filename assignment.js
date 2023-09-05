function cubeNumber(number) {
    if (typeof number !== "number" || number<0) {
        return "please provide a positive number"
    }
    let cube = Math.abs(Math.pow(number, 3));
    return cube

}



function matchFinder(string1, string2) {
   if (typeof string1 != "string" || typeof string2!= "string" ){
    return "All data type needs to be string"

   }
   else{
    return string1.includes(string2)

   }

}



function sortMaker(arr) {

    if (Array.isArray(arr) !== true ){
        return "please provide me an array of number"
    }
    else{
        for (let item of arr){
            if (typeof item != "number"){
                return "please provide me an array of number"
            }
        }

        if (arr[0] === arr[1]) {
            return "equal"
        }
    
        else if (arr[0] >= 0 && arr[1] >= 0) {

            if (arr[0] > arr[1]){
                return [arr[0],arr[1]]
            }

            else{
                return [arr[1],arr[0]]
            }
        }   
        else {
            return "Invalid Input"
        }    
    }   
}




function findAddress(obj) {

    if (typeof obj !== "object"){
        console.log("Please provide an object")
    }
    else{

        const street =obj.street || "__";
        const house =obj.house || "__";
        const society =obj.society || "__";

        return street + "," + house + "," + society;
        
    }
}





function canPay(changeArray, totalDue) {
    if(Array.isArray(changeArray) !== true || typeof totalDue !== "number"){
        return"please provide an array and a number" 
    }
    else if (changeArray.length == 0){
        return "Array is empty .Please provide number in array"
    }
    else{
        let sum= 0;
        for (let i = 0 ; i<changeArray.length; i++){
            let index = changeArray[i];

            if( typeof index !== "number"){
                return"Please provide an array of number"
            } 
            else{
                sum = sum + index;

            }
        }
        return sum >= totalDue
    }
}


// {street: 10,house: “15A”,society: Earth Perfect} 

// console.log(cubeNumber(4));
// console.log(matchFinder("Peter Parker","pet"));
// console.log(sortMaker([0,1]));
// console.log(findAddress(object));
// console.log(canPay([1,5,5],10));

// "hello" “hello”

// function compare(a, b) {
//     if (a == b) {
//     return true;
//     } else {
//     return false;
//     }
//    }
//    const result = compare(15, "15");
//    console.log(result);


//    function compare(a, b) {
//     console.log(typeof a.toString())
//     if (a.toString() === b) {
//     return true;
//     } else {
//     return false;
//     }

//    }
//    const result = compare(25, 25);
//    console.log(result);

//    let a="hi"
// let b="there"
// console.log(a+b)