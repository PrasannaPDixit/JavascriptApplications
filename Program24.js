const prompt = require("prompt-sync")();

let Arr = [];

Accept();

let iStart = parseInt(prompt("Enter a starting range : "));
let iEnd = parseInt(prompt("Enter the end of range : "));

DisplayRange(iStart,iEnd);
console.log();

function Accept()
{
    let iSize = parseInt(prompt("Enter the size of array : "));

    for(let i = 0; i < iSize; i++)
    {
        Arr[i] = parseInt(prompt("Enter the Element "+(i+1)+" : "));

    }
}

function DisplayRange(iNo1, iNo2)
{
    let i = 0;
    for(i = 0; i < Arr.length; i++)
    {
        if(Arr[i] >= iNo1 && Arr[i] <= iNo2)
        {
            process.stdout.write(Arr[i]+" ");
        }
    }
}