const prompt = require("prompt-sync")();

function Accept(iLength)
{
    let i = 0;
    for(i = 0; i < iLength; i++)
    {
        Arr[i] = parseInt(prompt("Enter element No "+(i+1)+" : "));
    }
}

function Display()
{
    let i = 0;
    for(i = 0; i < Arr.length; i++)
    {
        process.stdout.write(Arr[i]+" ");
    }
}

function Reverse()
{
    let i = 0, iTemp = 0;
    for(i = 0; i < (Arr.length/2); i++)
    {
        iTemp = Arr[i];
        Arr[i] = Arr[(Arr.length) - (i + 1)];
        Arr[(Arr.length) - (i + 1)] = iTemp;
    }
    
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);
Display();
console.log();
Reverse();
Display();
console.log();
Reverse();
Display();
console.log();
