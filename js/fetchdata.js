function getData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((item)=>{
            str+=`<div class="card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
    </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
    
}