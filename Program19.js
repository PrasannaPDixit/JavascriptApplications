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

function Display_Digits_Product()
{
    let i = 0, iMult = 0;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        iMult = 1;

        while(iNo != 0)
        {
            iMult = iMult * Math.floor(iNo % 10);
            iNo = Math.floor(iNo / 10);
        }
        
        process.stdout.write(iMult+" ");
        
    }
    
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

Display_Digits_Product();

console.log();
