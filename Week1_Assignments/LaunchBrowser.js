/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript*/

launchBrowser("Chrome")
function launchBrowser(browser)
{
    if (browser==="Chrome")
    {
        console.log(`You have opened a ${browser} browser`)
    }
    else
    {
        console.log (`You have opened ${browser} browser`)
    }

}

testType("smoke")
function testType(tests)
{
    switch (tests)
    {
        case "sanity":
        console.log(`This is ${tests} test` )
        break;
        
        case "regression":
        console.log(`This is ${tests} test` )
        break;
        
       default:
        console.log(`This is ${tests} test` )
        
    }
    

}
