let iNo1 = 12099, iNo2 = 63547, iNo3 = 23784721;

function SumDigits(iValue)
{
    let iSum = 0;
    let iDigit = 0;

    while(iValue != 0)
    {
        iDigit = iValue % 10;
        iSum = iSum + iDigit;
        iValue = Math.floor(iValue/10);
    }
    return iSum;
}

let iAns1 = SumDigits(iNo1);
let iAns2 = SumDigits(iNo2);
let iAns3 = SumDigits(iNo3);

console.log(iAns1,iAns2,iAns3);