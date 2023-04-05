const prompt = require("prompt-sync")();

function MaxOccurance(str1)
{
    let Arr = str1.split(" ");
    let i = 0; j = 0, k = 0, iMax = 0, index = 0;
    let bFlag = false;
    let iCnt = Array(Arr.length).fill(0);
    let Arr2 = Array(Arr.length).fill('');

    for(i = 0; i < Arr.length; i++)
    {
        bFlag = true;

        for(k = i-1 ; k >= 0; k--)
        {
            if(Arr[i] === Arr[k])
            {
                bFlag = false;
            }
        }

        if(bFlag == true)
        {
            for(j = 0 ; j < Arr.length; j++)
            {
                if((Arr[i]) === (Arr[j]))
                {
                    iCnt[i]++;
                }
            }
        }   
        if(iCnt[i] > iMax)
        {
            iMax = iCnt[i];
            index = i;
        }
    }
    console.log("Maximum occured word is "+Arr[index]+" having frequency : "+iCnt[index]);
}

let Str1 = prompt("Enter a string : ");
MaxOccurance(Str1);
