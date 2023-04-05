const prompt = require("prompt-sync")();

let Arr = [];

Accept();

let iNo = parseInt(prompt("Enter a Number to serach : "));

let iRet = SearchNo(iNo);

if(iRet == true)
{
    console.log(iNo+" is present in array");
}
else
{
    console.log(iNo+" is NOT present in array");
}

function Accept()
{
    let iSize = parseInt(prompt("Enter the size of array : "));

    for(let i = 0; i < iSize; i++)
    {
        Arr[i] = parseInt(prompt("Enter the Element "+(i+1)+" : "));

    }
}

function SearchNo(iNo)
{
    let bFlag = false;
    for(let i = 0; i < Arr.length; i++)
    {
        if(Arr[i] == iNo)
        {
            bFlag = true;
            break;
        }
    }
    return bFlag;
}