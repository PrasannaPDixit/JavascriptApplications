const prompt = require("prompt-sync")();

function DisplayPattern(iRow, iCol)
{
    let i = 0, j = 0;
    for(i = 1; i <= iRow; i++)
    {
        for(j = 1; j <= iCol; j++)
        {
            if(i == 1 || j == 1 || i == iRow || j == iCol || (i+j) == (iRow +1) )
            {
                process.stdout.write("* ")
            }
            else if((i + j) < (iRow + 1))
            {
                process.stdout.write("# ");
            }
            else
            {
                process.stdout.write("@ ");
            }
            
        }
        console.log();
    }

}

let iNo1 = parseInt(prompt("Enter number of Rows : "));
let iNo2 = parseInt(prompt("Enter number of columns : "));

DisplayPattern(iNo1,iNo2);