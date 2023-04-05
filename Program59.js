const prompt = require("prompt-sync")();

function Accept(Arr,iSize)
{
    for(let i = 0; i < iSize ; i++)
    {
        Arr[i] = parseInt(prompt("Enter element "+(i+parseInt(1))+" : "));
    }    
}

function DisplayPattern(Arr)
{
    let i, j;
    for(i = 0; i < Arr.length; i++)
    {
        for(j = 1; j <= Arr[i]; j++)
        {
            process.stdout.write("* "); 
        }
        console.log();
    }
}

let iNo = parseInt(prompt("Enter Size of first array : "));
let Arr1 = [];
Accept(Arr1, iNo);
DisplayPattern(Arr1);

