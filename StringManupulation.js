/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.

*/
function LastWord(lengthwords)
{
let words=lengthwords.split(' ')


for (let i=words.length -1; i>=0;i--)
{
    if(words[i]==='')
    {
        words[i].trim();

    }

    else
    {
        return(words[i].length)

    }
    
}

}
console.log ("The length of last word Hello World is:", LastWord("Hello World"))
console.log ("The length of last word  fly me to the moon  is:", LastWord(" fly me to the moon "))