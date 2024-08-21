// promise is an object which is used to handle async operations 


// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve("Success")
//         }
//         else{
//             reject("Error")

//         }
//     })
// }

// fetchData().then((data)=>{
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);
// })


// -------------------------------------------------------

const x= new Promise ((resolve,reject)=>{
    if(true){
        resolve("Success")
    }
    else{
        reject("Error")
    }


})

.then((item)=>{
    console.log(item);
})
.catch((item)=>{
    console.log(item);
})