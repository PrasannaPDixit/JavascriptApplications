const prompt = require("prompt-sync")();

let iNo = parseInt(prompt("Enter a number : "));

let iRet = MultiplyDigits(iNo);

console.log("Product of digits of "+iNo+" : "+iRet);

function MultiplyDigits(iNo)
{
    let count = 0, iMult = 1;
    while(iNo != 0)
    {
        iDigit = Math.floor(iNo % 10);

        iMult = iMult * iDigit;

        iNo = Math.floor(iNo / 10);
    }
    return iMult;
}
