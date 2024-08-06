 async function getData(){
    const res= await fetch("https://jsonplaceholder.typicode.com/todos")
    const data=await res.json()
    str=``
    data.map((item)=>{
        str+=` <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.completed?`<span class="cmp">Completed</span>`:`<span class="ncmp"> Not Completed</span>`}</td>

            </tr>`

    })
    document.getElementById("tbody").innerHTML=str
}

getData()


// ===================
// async function myFunc(){
//     return "Hello"
// }

