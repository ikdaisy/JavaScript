function getData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((item)=>{
            str+=`<div class="card">
            <span class="id">${item.id}.</span>
            <span  class="name">${item.name}</span>
            <h6  class="email">${item.email}</h6>
            <p  class="body">${item.body}</p>
            </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
    
}


