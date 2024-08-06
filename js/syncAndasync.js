
// synchronous
// console.log("start");
// for(i=1;i<10;i++){
//     console.log(i);
// }
// console.log("end");


// asynchronous 
// console.log("star");
// setTimeout(()=>{
//     for(i=1;i<10;i++){
//         console.log(i);
//     }
// },3000)

// console.log("end");


// setInterval func 
// setInterval(()=>{
//     document.write("*")
// },3000)


i=10;
let x=setInterval(()=>{
    document.getElementById("num").textContent=i
    
    if(i==0){
        document.write("start")
        clearInterval(x)
    }
    i--

},1000)

