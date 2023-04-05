const prompt = require("prompt-sync")();

function Accept(Arr,iSize)
{
    for(let i = 0; i < iSize ; i++)
    {
        Arr[i] = parseInt(prompt("Enter element "+(i+parseInt(1))+" : "));
    }    
}

function ReverseElements(Arr)
{
    let iNo = 0,iRev = 0;
    let ArrRet = [];
    for(let i = 0; i < Arr.length ; i++)
    {
        iNo = Arr[i];
        iRev = 0;

        while(iNo != 0)
        {
            iRev = (iRev * 10) + (iNo % 10);
            iNo = Math.floor(iNo/10);
        }
        
        ArrRet[i] = iRev;
    }  
    return ArrRet;
}

let iNo = parseInt(prompt("Enter Size of first array : "));
let Arr1 = [];
Accept(Arr1, iNo);

let bRet = [];
bRet = ReverseElements(Arr1)

console.log(bRet);