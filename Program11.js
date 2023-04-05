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

function DisplayPerfect()
{
    let i = 0, iNo = 0, iSum= 0;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        iSum = 0;
        
        for(let j = 1; j <= iNo/2; j++)
        {
            if(iNo % j == 0)
            {
                iSum = iSum+j;
            }
        }
        
        if(iSum == iNo)
        {
            process.stdout.write(iNo+" ");
        }
    }
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

process.stdout.write("Perfect numbers are : ");
DisplayPerfect();
console.log();