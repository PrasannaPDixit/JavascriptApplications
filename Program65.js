const prompt = require("prompt-sync")();

function RemoveChar(str, rem)
{
    let Arr = str.split('');
    let i = 0 ;

    for(i = Arr.length-1; i >=0 ; i--)
    {
        if(Arr[i] === rem)
        {
            Arr.splice(i,1);
        }
    }
    let sRet = Arr.join('');
    return sRet;
}

let Str1 = prompt("Enter a string : ");
let cValue = prompt("Enter a charcter to remove : ");
let sRet = RemoveChar(Str1, cValue);
console.log("Updated string : "+sRet);
