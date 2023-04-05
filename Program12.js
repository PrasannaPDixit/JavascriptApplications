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

function DisplayPrime()
{
    let i = 0, iNo = 0;
    let bFlag = false;
    for(i = 0; i < Arr.length; i++)
    {
        iNo = Arr[i];
        bFlag = false;
        
        for(let j = 2; j <= iNo/2; j++)
        {
            if(iNo % j == 0)
            {
                bFlag = true;
                break;
            }
        }
        if(bFlag == false)
        {
            process.stdout.write(iNo+" ");
        }
    }
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

process.stdout.write("Prime numbers are : ");
DisplayPrime();
console.log();