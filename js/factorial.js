function find(){
    let num=parseInt(document.getElementById("num").value)

    setTimeout(() => {

        document.getElementById("result").textContent=`The Factorial is ${fact(num)}`
        
    }, 0);
}

function fact(num){
    if(num<=1){
        return 1
    }
    else{
        return num*fact(num-1)
    }
}