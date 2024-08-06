obj=[{name:"aman",age:10},
    {name:"kev",age:20},
    {name:"kev",age:30},

    {name:"li",age:10}]


// for (i in obj){
 //     console.log(obj[i].name);
// }


// ================================

// obj.forEach((item) => {
//     console.log(item);
    
// });


// ====================================

// obj.map((item)=>{
//     console.log(item);
// })

// =======================================

//  let x=obj.find((item)=>{
//     return item.name=="kev"
// })
// console.log(x);
// console.log(typeof(x));

// ==========================================

// let x=obj.filter((item)=>{
//         return item.name=="kev"
//     })
//     console.log(x);
//     console.log(typeof(x));

// ================== reduce method returns the last object ========== ========

// let val=obj.reduce((total,item)=>{
//     return item
// })

// console.log(val); 

// =================total is initialised after the func close=========================

// let val=obj.reduce((total,item)=>{
//     return total
// },10)

// console.log(val); 

// ====================== and used to find the total===========================

// let val=obj.reduce((total,item)=>{
//     return total+=item.age
// },0)

// console.log(val); 