function sum(){
    let a= parseInt(document.getElementById("first").value)
    let b= parseInt(document.getElementById("second").value)
    document.getElementById("result").innerHTML=`Sum is ${a+b}`


}

function difference(){
    let a= parseInt(document.getElementById("first").value)
    let b= parseInt(document.getElementById("second").value)
    document.getElementById("result").innerHTML=`Difference is ${a-b}`


}
function product(){
    let a= parseInt(document.getElementById("first").value)
    let b= parseInt(document.getElementById("second").value)
    document.getElementById("result").innerHTML=`Product is ${a*b}`


}

function quotient(){
    let a= parseInt(document.getElementById("first").value)
    let b= parseInt(document.getElementById("second").value)
    document.getElementById("result").innerHTML=`Quotient is ${a/b}`


}