function getData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((item)=>{
            str+=`<div class="card">

            <span class="name">${item.name}.</span>
            <h3  class="username">${item.username}</h3>
            <h3  class="email"> ${item.email}</h3>
            <p  class="address">${item.address.street} ${item.address.suite} ${item.address.city} </p>
            <p  class="address"> ${item.address.zipcode} ${item.address.geo.lat} ${item.address.geo.lng} </p>
           
        
            



            <h3  class="phone">${item.phone}</h3>
            <h3  class="website">${item.website}</h3>
            <h3  class="company">${item.company.name}  </h3>
            <h3  class="company"> ${item.company.catchPhrase} ${item.company.bs} </h3>


            </div>`
        })
        document.getElementById("list").innerHTML=str
    })
}

getData()