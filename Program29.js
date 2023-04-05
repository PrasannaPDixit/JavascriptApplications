const prompt = require("prompt-sync")();

function StrCatN(str1, str2, iNo)
{
    if(iNo > str2.length)
    {
        iNo = str2.length;
    }
    let Arr1 = str1.split("");

    for(let i = 0; i < iNo ; i++)
    {
        Arr1.push(str2[i]);
    }
    str1 = Arr1.join("");
    return str1;
}

let str1 = prompt("Enter First string : ");
let str2 = prompt("Enter First string : ");
let iValue = parseInt(prompt("Enter number of characters to be concatenated : "));

let Ret = StrCatN(str1,str2,iValue);

console.log(Ret);

console.log(str1);

console.log(str2);


