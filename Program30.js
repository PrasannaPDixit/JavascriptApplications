const prompt = require("prompt-sync")();

function StrCmp(str1, str2)
{
    let bFlag = false;

    if(str1.length != str2.length)
    {
        return false;
    }

    for(let i = 0; i < str1.length; i++)
    {
        if(str1[i] === (str2[i]))
        {
            bFlag = true;
        }
        else
        {
            bFlag = false;
            break;
        }
    }
    
    return bFlag;
}

let str1 = prompt("Enter First string : ");
let str2 = prompt("Enter First string : ");

let bRet = StrCmp(str1,str2);

if(bRet == true)
{
    console.log("Strings are equal...");
}
else
{
    console.log("Strings are Not equal...");
}
