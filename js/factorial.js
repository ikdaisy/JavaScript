let fact=1;
let num= parseInt(document.getElementById("num").value)
function findFactorial(){
    for(i=1;i<=num;i++){
        fact=fact*i;

        setTimeout(()=>{
            n*findFactorial(n-1)
        },1000)
    }
  document.getElementById("result").innerHTML=fact;
}


