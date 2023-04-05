const prompt = require("prompt-sync")();

function DisplayPattern(str)
{
    let i = 0, j = 0;

    for(i = 0; i < str.length; i++)
    {
        for(j = 0; j <= i; j++)
        {
            process.stdout.write(str[j]+" ");
        }
        console.log();
    }

}

let str = prompt("Enter a string : ");


DisplayPattern(str);