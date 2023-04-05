const prompt = require("prompt-sync")();

function Accept(Arr,iSize)
{
    for(let i = 0; i < iSize ; i++)
    {
        Arr[i] = parseInt(prompt("Enter element "+(i+parseInt(1))+" : "));
    }    
}

function checkPalindrome(Arr)
{
    let iNo = 0,iRev = 0;
    let bFlag = true;
    for(let i = 0; i < Arr.length ; i++)
    {
        iNo = Arr[i];
        iRev = 0;

        while(iNo != 0)
        {
            iRev = (iRev * 10) + (iNo % 10);
            iNo = Math.floor(iNo/10);
        }
        
        if((iRev != Arr[i]) || (Arr[i] != Arr[Arr.length - (i + 1)]))
        {
            bFlag = false;
            break;
        }
    }  
    return bFlag;
}

let iNo = parseInt(prompt("Enter Size of first array : "));
let Arr1 = [];
Accept(Arr1, iNo);

let bRet = checkPalindrome(Arr1)

if(bRet == true)
{
    console.log("Array ans its elements are palindrome")
}
else
{
    console.log("Array ans its elements are NOT palindrome")
}