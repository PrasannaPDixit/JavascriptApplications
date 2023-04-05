const prompt = require("prompt-sync")();

function DisplayPattern(str)
{
    let i = 0, j = 0;
    let Arr = str.split('');

    for(i = 0; i < Arr.length; i++)
    {
        for(j = 0; j < Arr.length; j++)
        {
            process.stdout.write(Arr[j]+" ");
        }
        console.log();
    }

}

let str = prompt("Enter a string : ");


DisplayPattern(str);