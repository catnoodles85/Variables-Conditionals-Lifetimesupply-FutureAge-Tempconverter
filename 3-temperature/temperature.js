// Exercise Three - Temperature Converter
//
// Build some code which can convert from Fahrenheit to Celsius, and also from Celsius to Fahrenheit.
// Based upon the method described here: https://www.mathsisfun.com/temperature-conversion.html
//
// Step One:
// First, ask the user what unit they would like to convert to.  f or c
// Store their answer in a variable.
//
// "What would you like to convert to, Celsius or Fahrenheit? Enter c or f..."
//
// Step Two:
// Now, one of two things need to happen.
// If they entered c, then you need to convert from fahrenheit to celsius.
// otherwise, if they entered f then you need to convert from celsius to fahrenheit.
//
// Create an if statement to check if they entered c or f.
//
// Hint: Remember that they could enter a capital or lowercase letter!
// It's probably best to check for both.  if the unit is equal to c or the unit is equal to C
//
// Hint 2: You don't have to do two if statements, you could just do an if and an else.
// If they chose c, then do the celsius conversion.
// else, they must have chosen f.
//
// Step Three:
// Now, for both celsius to fahrenheit and for fahrenheit to celsius, do the conversion!
// Celsius to Fahrenheit:  Divide by 5, then multiply by 9, then add 32
// Fahrenheit to Celsius:  Subtract 32, then multiply by 5, then divide by 9
// in both the if and the else blocks, create a variable called result and assign the answer to it.
//
// Step Four:
// Now print your answer to the browser window using document.write()
//
// It should look like:
// ""22°C converted to Fahrenheit is 71.6°F"
// or
// ""71.6°F converted to Celsius is 22°C"
//
// Note that some of your numbers may have many decimal places!
// Like 76.266666666667, that's perfectly fine!  You can leave those as is.
//
// Write your code here 👇
let tempAnswer = prompt("What would you like to convert to? Celsius or Fahrenheit? Please Type C or F");
        if(tempAnswer === "C" || tempAnswer === "c" ){
        let x = prompt("What is the celsius tempurature?")
        let result1 = (x/5*9+32) + "º";
        document.write(`${x} C converted to Fahrenheit is ${result1} F`);
        }else if (tempAnswer === "F" || tempAnswer === "f" ){  
        let y = prompt("What is the fahrenheit tempurature?")
        let result2 = (y-32)*(5/9) + "º";
        document.write(`${y} F converted to Celsius is ${result2} C`);
        }else{
                alert("please refresh the page and enter a correct tempurature and or a correct value when prompted. thank you!")
        }
