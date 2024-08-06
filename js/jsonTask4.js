function getData(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>{
       return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((item)=>{
            str+=`<div class="card">
            <span class="id">${item.id}.</span>
            <span  class="title">${item.title}</span>
           

            
        
            </div>`
        })
        document.getElementById("list").innerHTML=str;

    })
    .catch((error)=>{
        console.log(error);
    })
}

getData()