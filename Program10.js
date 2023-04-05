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

function FindMax()
{
    let i = 0, iMax = Arr[0];
    for(i = 1; i < Arr.length; i++)
    {
        if(Arr[i] > iMax)
        {
            iMax = Arr[i];
        }
    }
    return iMax;
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

let iMax = FindMax();

console.log("largest array element : "+iMax);

