const prompt = require("prompt-sync")();

function CheckPalindrome(Str)
{
    let Str1 = Str.toLowerCase();
    let bFlag = true;
    for(let i = 0; i <= (Str1.length/2); i++)
    {
        if(Str1[i] !== Str1[Str1.length - (i+1)])
        {
            bFlag = false;
        }
    }
    return bFlag;
    
}

let str = prompt("Enter First string : ");

let bRet = CheckPalindrome(str);

if(bRet == true)
{
    console.log("String is Palindrome");
}
else
{
    console.log("String is NOT Palindrome");
}


// console.log(('A').charCodeAt(0));
// console.log(String.fromCharCode(97))
// console.log(('a').charCodeAt(0) - ('A').charCodeAt(0))