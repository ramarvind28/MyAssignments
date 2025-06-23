/*Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.*/

numberType(5)
numberType(-5)
numberType(0)
function numberType(num)
{
if (num >0)
{
console.log ("The number is greater than 0")
}
else if (num===0)
{
console.log ("The number is 0")
}
else
{
console.log ("The number is less than 0")
}
}

