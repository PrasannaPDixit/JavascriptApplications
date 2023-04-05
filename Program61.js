const prompt = require("prompt-sync")();

function DisplayPattern(iNo)
{
    let i = 0, j = 0, k = 0, l = 0;
    for(i = 1 ; i <= iNo; i++)
    {
        for(j = 1; j <= iNo - i; j++)
        {
            process.stdout.write(" ");
        }
        for(k = 1 ; k <= i; k++)
        {
            process.stdout.write("*");
        }
        console.log();
    }
}

let iNo = parseInt(prompt("Enter the size of pattern : "));
DisplayPattern(iNo);