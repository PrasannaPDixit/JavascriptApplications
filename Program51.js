const prompt = require("prompt-sync")();

function DisplayPattern(str)
{
    let i = 0, j = 0, k = 0;

    for(i = 0; i < str.length; i++)
    {
        for(j = 0; j <= i; j++)
        {
            process.stdout.write(str[j]+" ");
        }
        for(k = j; k < str.length; k++)
        {
            process.stdout.write("* ");
        }
        console.log();
    }

    for(i = 1; i < str.length; i++)
    {
        for(j = 0; j < str.length - i; j++)
        {
            process.stdout.write(str[j]+" ");
        }
        for(k = j; k < str.length; k++)
        {
            process.stdout.write("* ");
        }
        console.log();
    }
    
}

let str = prompt("Enter a string : ");


DisplayPattern(str);