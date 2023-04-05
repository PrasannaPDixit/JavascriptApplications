const prompt = require("prompt-sync")();

function DisplayPattern(iRow, iCol)
{
    let i = 0, j = 0;
    for(i = 0; i <= iRow; i++)
    {
        for(j = 0; j <= iCol; j++)
        {
            process.stdout.write(String.fromCharCode(('A').charCodeAt(0) + i)+" ");
        }
        console.log();
    }

}

let iNo1 = parseInt(prompt("Enter number of Rows : "));
let iNo2 = parseInt(prompt("Enter number of columns : "));

DisplayPattern(iNo1,iNo2);