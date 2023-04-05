const prompt = require("prompt-sync")();

let iNo = parseInt(prompt("Enter a number : "));

let iRet = CountDigits(iNo);

console.log("Count of digits between 3 & 7 in "+iNo+" : "+iRet);

function CountDigits(iNo)
{
    let count = 0, iDigit = 0;
    while(iNo != 0)
    {
        iDigit = Math.floor(iNo % 10);

        if(iDigit >=3 && iDigit <= 7)
        {
            count++;
        }

        iNo = Math.floor(iNo / 10);
    }
    return count;
}
