let iNo1 = 12099, iNo2 = 63547, iNo3 = 23784721;

function Count_Digits(iValue)
{
    let Cnt = 0;
    while(iValue != 0)
    {
        iValue = Math.floor(iValue/10);
        Cnt++;
    }
    return Cnt;
}

let iAns1 = Count_Digits(iNo1);
let iAns2 = Count_Digits(iNo2);
let iAns3 = Count_Digits(iNo3);

console.log(iAns1,iAns2,iAns3);