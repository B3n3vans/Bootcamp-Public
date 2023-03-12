function minToFront(arr){                                   // creating a function called minToFront so that i can pull the lowest value in an array to the front of it
var min = arr[0];                                           //min value starts as the first number in the array
var newArr = [];                                            //newarr is the new array that all the values will be stored
    for(i=0;i<arr.length;i++){                              //for loop targeting the lowest value in the array
     if(min > arr[i])                                       // if statement finding which number is lower than the first number in the array
     min = arr[i];}                                         //lowest number is now found and set to min
     newArr.push(min);                                      // push the lowest number into the new array in the first position
     var low = arr.indexOf(min);                            // low variable to find the index number of the array the min came from
     
   for (i=0;i<low; i++){                                     //for loop used to gather all numbers before the min
    newArr.push(arr[i]);                                     // pushing all numbers before the min into the new array
}  for (i=low+1;i<arr.length;i++){                           // for loop used to gather all numbers after the min
    newArr.push(arr[i]);                                     // pushing all numbers after the min into the new array
} return newArr;                                             // returning the new array as the output of the function
}

//console.log(minToFront([1,8,-5,15,-2,4,0,-4,-8]));
console.log(minToFront([5, 93, 22, 4, 14 ,15, 1, 6]));        //console logging the output of the minToFront function with the given array