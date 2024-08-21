document.getElementById("btn").addEventListener("click",()=>{
    // create an xhr object 
    var xhr=new XMLHttpRequest()
    // console.log(xhr);
    // open the api 
    xhr.open("GET",'https://dummyjson.com/posts/1')
    // get data from the api 
   xhr.onload=()=>{
    // console.log(xhr.response);
   if(xhr.status==200){
    data=JSON.parse(xhr.response)
    console.log(data);
   }
   else{
    alert("Invalid API")
   }

    
   }
//    network error 
   xhr.onerror=()=>console.log("error");
//    send xhr to server 
   xhr.send()
})