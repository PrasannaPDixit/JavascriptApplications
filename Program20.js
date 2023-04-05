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

function Display_Smallest_Digit()
{
    let i = 0, iMin = 0;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        iMin = Math.floor(iNo % 10);

        while(iNo != 0)
        {
            if(Math.floor(iNo % 10) < iMin)
            {
                iMin = Math.floor(iNo % 10);
            }
            iNo = Math.floor(iNo / 10);
        }
        
        process.stdout.write(iMin+" ");
        
    }
    
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

Display_Smallest_Digit();

console.log();
