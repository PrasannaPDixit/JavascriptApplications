const prompt = require("prompt-sync")();

function Accept(iLength)
{
    let i = 0;
    for(i = 0; i < iLength; i++)
    {
        Arr[i] = parseInt(prompt("Enter element No "+(i+1)+" : "));
    }
}

function SecondMax()
{
    let i = 0, iMax1 = Arr[0], iMax2 = 0;
    let bFlag = false;
    for(i = 1; i < Arr.length; i++)
    {
        if(Arr[i] > iMax1)
        {
            iMax2 = iMax1;
            iMax1 = Arr[i];
        }
        else if(Arr[i] > iMax2)
        {
            iMax2 = Arr[i];
        }
        
    }
    return iMax2;
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

let iRet = SecondMax();
console.log("Second max element : "+iRet);
