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

function ReverseElement()
{
    let i = 0, iTemp = 0;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        iTemp = 0;

        while(iNo != 0)
        {
            iTemp = iTemp*10 + Math.floor(iNo % 10);
            iNo = Math.floor(iNo / 10);
        }
        Arr[i] = iTemp;
    }
    
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);
Display();
console.log();
ReverseElement();
Display();
console.log();
ReverseElement();
Display();
console.log();
