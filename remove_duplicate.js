var prompt=require("prompt-sync")();
var n=prompt("Enter the number of elements of the array");
var a=[];
for(var i=0;i<n;i++)
{
    a[i]=prompt();
}
// Now we need to remove the duplicate elements of the array 
var b=new Set(a);
var c=Array.from(b);
var temp=0;
for(var i=0;i<c.length-1;i++)
{
    for(var j=i+1;j<c.length;j++)
    {
        if(c[i]>c[j])
        {
            temp=c[i];
            c[i]=c[j];
            c[j]=temp;
        }
    }
}
console.log("The elements of the array after removing duplicate elements are "+c);
