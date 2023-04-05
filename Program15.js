const prompt = require("prompt-sync")();

function Accept(iLength)
{
    let i = 0;
    for(i = 0; i < iLength; i++)
    {
        Arr[i] = parseInt(prompt("Enter element No "+(i+1)+" : "));
    }
}

function AddDigits()
{
    let i = 0, iSum = 0;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        iSum = 0;

        while(iNo != 0)
        {
            iSum = iSum + Math.floor(iNo % 10);
            iNo = Math.floor(iNo / 10);
        }
        process.stdout.write(iSum+" ");
        
    }
    
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

AddDigits();
console.log();
