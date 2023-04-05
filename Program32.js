const prompt = require("prompt-sync")();

function StrToggle(Str)
{
    let Str1 = [];
    for(let i = 0; i < Str.length; i++)
    {
        if(Str[i] >= 'A' && Str[i] <= 'Z')
        {
            Str1[i] = String.fromCharCode((Str.charCodeAt(i) + 32))
        }
        else if(Str[i] >= 'a' && Str[i] <= 'z')
        {
            Str1[i] = String.fromCharCode((Str.charCodeAt(i) - 32))   
        }
        else
        {
            Str1[i] = Str[i];
        }
    }
    return Str1.join('');
    
}

let str = prompt("Enter First string : ");

let sRet = StrToggle(str);

console.log("Toggeled String : "+sRet);

// console.log(('A').charCodeAt(0));
// console.log(String.fromCharCode(97))
// console.log(('a').charCodeAt(0) - ('A').charCodeAt(0))