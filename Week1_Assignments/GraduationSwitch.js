/* Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.*/

studentScore(100)
studentScore(45)
studentScore(1)
function studentScore(score)
{   let grade;
    switch (true)
    {
        case score >=0 && score<= 25:
        grade= "C-"
        break;
        case score >25 && score<= 40:
        grade= "C"
        break
    
        case score >40 && score <=60:
        grade= "C+"
        break;

        case score >60 && score <=80:
        grade= "B"
        break;
        
        case score >80 && score <=90:
        grade= "B+"
        break;
        
        case score >90 && score <=100:
        grade= "A"
        break;
        
        default:
        grade="No Grade"
        break;


    }
    console.log(`Mark is:${score} and Grade is:${grade}`);

}