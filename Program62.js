const prompt = require("prompt-sync")();

function CheckRotation(str1,str2)
{
    let str3 = str1+str1+str1+str1+str1;
    let i = 0, j = 0,iCnt = 0;
    let bFlag = false;
    
    for(i = 0; i < str3.length; i++)
    {
        bFlag = false;
        iCnt = 0;

        if(str3[i] == str2[0])
        {
            for(j = 0; j < str2.length; j++)
            {
                if(str3[i+j] == str2[j])
                {
                    iCnt++;
                }
            }
            if(iCnt == str2.length)
            {
                bFlag = true;
                break;
            }
        }
    }
    return bFlag;

}

let Str1 = prompt("Enter first string : ");
let Str2 = prompt("Enter Second string : ");

let bRet = CheckRotation(Str1,Str2);

if(bRet == true)
{
    console.log(Str1+ " is rotation of "+Str2);
}
else
{
    console.log(Str1+ " is NOT rotation of "+Str2);
}