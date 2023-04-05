const prompt = require("prompt-sync")();

let iNo = parseInt(prompt("Enter a number : "));

let iRet = SumDiff(iNo);

console.log("Difference in summation of even and odd digits of "+iNo+" : "+iRet);

function SumDiff(iNo)
{
    let count = 0, iEvenSum = 0, iOddSum = 0;
    while(iNo != 0)
    {
        iDigit = Math.floor(iNo % 10);

        if(iDigit % 2 == 0)
        {
            iEvenSum = iEvenSum + iDigit;
        }
        else
        {
            iOddSum = iOddSum + iDigit
        }

        iNo = Math.floor(iNo / 10);
    }
    return iEvenSum-iOddSum;
}
