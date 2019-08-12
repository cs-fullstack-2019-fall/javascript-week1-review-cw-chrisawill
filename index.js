// Problem 1
// Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit. If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones. If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.
//
// var userInput = prompt("Enter '1' to count down. Press '2' to count up. Press 'q' to quit.");
// userInput = parseInt(userInput);
// while (userInput === 1)
// {
//     var countD = prompt("What do you want to count down from?");
//     for ( var i = countD; console.log(i) ;i=i-1)
//     {
//         console.log(countD)
//     }
//
// }
//
// while (userInput === 2)
// {
//     var countU = prompt("What do you want to count up to?");
//     for (var n = countU;console.log(countU); n++ )
//     {
//         console.log(n)
//     }
// }









//     Challenge
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit. If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'. If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.

var userName = prompt("What is your name. Press 'q' to quit.");
var quit = "q";
while (userName !== quit)
{
    if (userName === "Kevin")
    {
        alert("What's up Kevin?")
    }
}

(userName === quit);


