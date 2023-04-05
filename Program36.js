const prompt = require("prompt-sync")();

function ContainsVowels(Str)
{
    let bFlag = false;
    for(let i = 0; i < Str.length; i++)
    {
        switch(Str[i])
        {
            case 'A' :
                bFlag = true;
                break;
            case 'a' :
                bFlag = true;
                break;  
            case 'E' :
                bFlag = true;
                break;
            case 'e' :
                bFlag = true;
                break;
            case 'i' :
                bFlag = true;
                break;
            case 'I' :
                bFlag = true;
                break;  
            case 'o' :
                bFlag = true;
                break;
            case 'O' :
                bFlag = true;
                break;
            case 'u' :
                bFlag = true;
                break;
            case 'U' :
                bFlag = true;
                break;
        }
        if(bFlag == true)
        {
            break;
        }

    }
    return bFlag;
    
}

let str = prompt("Enter First string : ");

let bRet = ContainsVowels(str);

if(bRet == true)
{
    console.log(str+" contains vowels");
}
else
{
    console.log(str+" does not contain vowels");
}


// console.log(('A').charCodeAt(0));
// console.log(String.fromCharCode(97))
// console.log(('a').charCodeAt(0) - ('A').charCodeAt(0))