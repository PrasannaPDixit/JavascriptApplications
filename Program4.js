let iNo1 = 12099, iNo2 = 63547, iNo3 = 23784721;

function CountEvenDigits(iValue)
{
    let Cnt = 0;
    let iDigit = 0;

    while(iValue != 0)
    {
        iDigit = iValue % 10;
        if(iDigit % 2 === 0)
        {
            Cnt++;
        }
        iValue = Math.floor(iValue/10);
    }
    return Cnt;
}

let iAns1 = CountEvenDigits(iNo1);
let iAns2 = CountEvenDigits(iNo2);
let iAns3 = CountEvenDigits(iNo3);

console.log(iAns1,iAns2,iAns3);