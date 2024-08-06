  let str=""
 function displayItems(){
    let item = document.getElementById("item").value
    str+=item+"<br>"
    document.getElementById("result").innerHTML= str
    document.getElementById("item").value= " "
 }

