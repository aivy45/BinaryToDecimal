let btn = document.querySelector(".btn");

function show(){
let num = document.querySelector("#binary").value;
let sum =0; 
var i=0;



for(let i=0; i<num.length; i++)
{
 
    if(num[i]!="1" && num[i]!="0")
    {
        alert("Not a binary Number"); 
        return;
    }
   
}


while(num)
{
    sum=sum+Math.pow(2,i)*(num%10);  
    i++;
    num=parseInt(num/10);
}
// alert(sum);
console.log(sum);

let p = document.getElementsByClassName("result");
p[0].innerText=sum;

}

btn.addEventListener("click", show);








