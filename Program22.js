const prompt = require("prompt-sync")();

let Arr = [];

Accept();

let iNo = parseInt(prompt("Enter a Number to serach : "));

let iRet = FisrstOcc(iNo);

console.log(iNo+" First occured at index : "+iRet);

function Accept()
{
    let iSize = parseInt(prompt("Enter the size of array : "));

    for(let i = 0; i < iSize; i++)
    {
        Arr[i] = parseInt(prompt("Enter the Element "+(i+1)+" : "));

    }
}

function FisrstOcc(iNo)
{
    let i = 0;
    for(i = 0; i < Arr.length; i++)
    {
        if(Arr[i] == iNo)
        {
            break;
        }
    }
    if(i == Arr.length)
    {
        return -1
    }
    return i;
}