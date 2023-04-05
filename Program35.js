const prompt = require("prompt-sync")();

function CountCapital(Str)
{
    let iCnt = 0;
    for(let i = 0; i < Str.length; i++)
    {
        if((Str.charCodeAt(i) >= ('A').charCodeAt(0)) && (Str.charCodeAt(i) <= ('Z').charCodeAt(0)))
        {
            iCnt++;
        }
        
    }
    return iCnt;
    
}

let str = prompt("Enter First string : ");

let iRet = CountCapital(str);

console.log("Number of capital characters in "+str+" : "+iRet);


// console.log(('A').charCodeAt(0));
// console.log(String.fromCharCode(97))
// console.log(('a').charCodeAt(0) - ('A').charCodeAt(0))