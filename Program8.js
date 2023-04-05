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

function SearchLastOcc(iNo)
{
    let i = 0;
    for(i = (Arr.length-1); i >= 0; i--)
    {
        if(Arr[i] === iNo)
        {
            break;
        }
    }
    if (i == -1)
    {
        return -1;
    }
    return i;
}

let Arr = [];
let iSize = 0;

iSize = parseInt(prompt("Enter the size of array : "));

Accept(iSize);

let iValue = parseInt(prompt("Enter the number to search in array : "));

let iPos = SearchLastOcc(iValue);

if (iPos == -1)
{
    console.log(iValue + " is not present in array");
}
else
{
    console.log("Index of "+iValue+" in array is : "+iPos);
}
