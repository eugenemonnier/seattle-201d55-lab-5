'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  var sumAnswer = a + b;
  var stringSumAnswer = 'The sum of ' + a + ' and ' + b + ' is ' + sumAnswer + '.';
  return [sumAnswer, stringSumAnswer];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  var prodAnswer = a * b;
  var stringProdAnswer = 'The product of ' + a + ' and ' + b + ' is ' + prodAnswer + '.';
  return [prodAnswer, stringProdAnswer];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
  var sumAanswer = sum(a, b);
  var sumBanswer = sum(b, c);
  var sumCanswer = sum(sumAanswer[0], sumBanswer[0]);
  var sumDanswer = sumCanswer[0] - b;
  var stringSumAnswer = a + ' and ' + b + ' and ' + c + ' sum to ' + sumDanswer + '.';
  var prodAanswer = multiply(a, b);
  var prodBanswer = multiply(b, c);
  var prodCanswer = multiply(prodAanswer[0], prodBanswer[0]);
  var prodDanswer = prodCanswer[0] / b;
  var stringProdAnswer = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + prodDanswer + '.';
  return[sumDanswer, prodDanswer, stringSumAnswer, stringProdAnswer];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4];

function sumArray(sumArr) {
  var sumAanswer = sum(testArray[0], testArray[1]);
  var sumBanswer = sum(testArray[1], testArray[2]);
  var sumCanswer = sum(sumAanswer[0], sumBanswer[0]);
  var sumDanswer = sumCanswer[0] - testArray[1];
  var stringSumAnswer = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + sumDanswer + ' is their sum.';
  return[sumDanswer, stringSumAnswer];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { 
  var prodAanswer = multiply(testArray[0], testArray[1]);
  var prodBanswer = multiply(testArray[1], testArray[2]);
  var prodCanswer = multiply(prodAanswer[0], prodBanswer[0]);
  var prodDanswer = prodCanswer[0] / testArray[1];
  var stringProdAnswer = 'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' have a product of ' + prodDanswer + '.';
  return[prodDanswer, stringProdAnswer];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5];

function multiplyAnyArray(dynamicArray) {
  var entireArrayConcat = '';
  var prodBanswer = [];
  // if the array has only 1 number pass that as finalAnswer
  if(testDynamicArray.length === 1) {
    prodBanswer[0] = testDynamicArray[0];
    prodBanswer[1] = testDynamicArray[0];
  } else {
    for(var i = 0; i < testDynamicArray.length; i++) {
      //Concat array
      if (i === testDynamicArray.length || i === 0) {
        entireArrayConcat = entireArrayConcat + testDynamicArray[i];
      } else {
        entireArrayConcat = entireArrayConcat + ',' + testDynamicArray[i];
      }
      // if this is the first loop && the array has more than one value, multiply the first two values
      if (i === 0 && testDynamicArray.length > 0) {
        prodBanswer = multiply(testDynamicArray[i], testDynamicArray[i + 1]);
      // if it is not the last value in the array multiply the current & next value of the array
      // then multiply by previous prodBAnswer.
      // then set first value of prodBAnswer as prodCAnswer divided by the current array value
      } else if (i < testDynamicArray.length - 1) {
        var prodAanswer = multiply(testDynamicArray[i], testDynamicArray[i + 1]);
        var prodCanswer = multiply(prodAanswer[0], prodBanswer[0]);
        prodBanswer[0] = prodCanswer[0] / testDynamicArray[i];
      }
    }
    // set 2nd vaule of prodBanswer to concatenated string.
    prodBanswer[1] = 'The numbers ' + entireArrayConcat + ' have a product of ' + prodBanswer[0] + '.';
  }
  return(prodBanswer);
}
// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
