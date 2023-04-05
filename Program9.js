const prompt = require("prompt-sync")();
//const cin = require("prompt-sync")();

function Accept(iLength)
{
    let i = 0;
    for(i = 0; i < iLength; i++)
    {
        Arr[i] = parseInt(prompt("Enter element No "+(i+1)+" : "));
    }
}

function Add()
{
    let i = 0, iSum = 0;
    for(i = (Arr.length-1); i >= 0; i--)
    {
        iSum = iSum + Arr[i];
    }
    return iSum;
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

let iAddition = Add();

console.log("Addition of array elements : "+iAddition);

