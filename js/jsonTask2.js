function getData(){
    fetch("https://jsonplaceholder.typicode.com/photos")
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
           <div>  <img src="${item.url}" alt="">
            <img src="${item.thumbnailUrl}" alt=""></div>

            
        
            </div>`
        })
        document.getElementById("list").innerHTML=str;

    })
    .catch((error)=>{
        console.log(error);
    })
}
