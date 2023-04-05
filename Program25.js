const prompt = require("prompt-sync")();

let iNo = parseInt(prompt("Enter a number : "));

let iRet = CountEvenDigits(iNo);

console.log("Count of even digits in "+iNo+" : "+iRet);

function CountEvenDigits(iNo)
{
    let count = 0, iDigit = 0;
    while(iNo != 0)
    {
        iDigit = Math.floor(iNo % 10);

        if(iDigit % 2 == 0)
        {
            count++;
        }

        iNo = Math.floor(iNo / 10);
    }
    return count;
}
