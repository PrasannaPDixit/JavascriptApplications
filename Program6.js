const cin = require("prompt-sync")();

let iSize = cin("Enter the size of array : ");
let Arr = [];

for(let i = 0; i < iSize; i++)
{
    Arr[i] = cin("Enter Element No "+(i+1)+" : ");
}

for(let i = 0; i < iSize; i++)
{
    console.log(Arr[i]);
}
console.log(typeof Arr);
console.log(typeof Arr[1]);
console.log(Arr);

for(i of Arr)//i contains values of array
{
    console.log(i);
}
for(i in Arr)//i contains index of array elements
{
    console.log(Arr[i]);
}