// function getData(){
//     return new Promise((resolve,reject)=>{
//         data={msg:"Promise executed"}
//         resolve(data)
//         reject(data) any one 
//     })
   
// }

// getData().then((dt)=>{
//     console.log("resolve");
//     console.log(dt);
   
    
// }).catch((error)=>{
//     console.log("reject");
//     console.log(error);

// })


// ======================================================================

// function orderFood( callback){
   
//         setTimeout(()=>{
//             console.log("Food Ordered");
//             callback();
    
//         },2000)

    
// }

// function decorateVenue( callback){
   
//             setTimeout(()=>{
//         console.log("Venue Decorated");
//         callback()

//     },2000)


// }

// function arrangeDJ(callback){
   
//         setTimeout(()=>{
//             console.log("DJ arranged");
//             callback()
    
//         },2000)
    
    
// }

// orderFood(()=>{
//     decorateVenue(()=>{
//         arrangeDJ(()=>{
//             console.log("All tasks completed");
//         })
//     })
// })

// ====================================================================================

function orderFood( callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Food Ordered");
           resolve()
    
        },2000)
    })
    
}

function decorateVenue( callback){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        console.log("Venue Decorated");
        resolve()

        

    },2000)
    })

}

function arrangeDJ(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DJ arranged");
           resolve()

           
        },2000)
    })
    
}

orderFood()
.then(()=>decorateVenue())
.then(()=>arrangeDJ())
.then(()=>{console.log("All tasks completed!!");})


