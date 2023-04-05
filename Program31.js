const prompt = require("prompt-sync")();

function StrCmpN(str1, str2, iSize)
{
    let bFlag = false;

    if(iSize > str2.length)
    {
        iSize = str2.length;
    }



    for(let i = 0; i < iSize; i++)
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
let iNo = parseInt(prompt("Enter how many elements for string you need to compare : "))

let bRet = StrCmpN(str1,str2,iNo);

if(bRet == true)
{
    console.log("Strings are equal upto "+iNo+" Characters");
}
else
{
    console.log("Strings are Not equal upto "+iNo+" Characters");
}
