function multiply(){
    let num = parseInt(document.getElementById("num").value)
    console.log(num);
    str=""
    for(i=1;i<=10;i++){
        str+= `<h4>${i}x${num}=${i*num}</h4>`


    }
    document.getElementById("result").innerHTML=str
}

