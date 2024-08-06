// console.log(this); returns window object in console
// ============================================================ 

// returns window object in console

// function asd(){
//     console.log(this);
// }
// asd()


//Function inside an object and using this keyword ===========================================================

// person={
//     name:"Kev",
//     age:12,
//     getName(){
//         console.log(this);
//     }
// }

// console.log(person.name);
// person.getName()

// =================================================
//  Using Anonymous Fn 

// person={
//     name:"Kev",
//     age:12,
//     getName:function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }

// console.log(person.name);
// console.log(person.age);
// person.getName()

 
// ===================== Writing func as one and calling the function ref into a key in object=============================

//  function getName(){
       
//     console.log(this.name);
// }

// person1={
//     name:"Kev",
//     age:12,
//     mtd:getName
    
// }

// person2={
//     name:"Len",
//     age:19,
//     mtd:getName
// }

// person1.mtd()
// person2.mtd()


// function getName(a,b){
//        console.log(this);
//     console.log(this.name);
//     // console.log(a,b);
// }

// person1={
//     name:"Kev",
//     age:12,
   
    
// }

// person2={
//     name:"Len",
//     age:19,
  
// }

// call and apply used in method call to set the parent of this keyword 

// getName.call(person1) 
// getName.apply(person2) 

// getName.call(person1,"1","2") 

// this will return error as apply requires array as parameter 

// getName.apply(person1,"1","2") 

// getName.apply(person1,["1","2"])

// bind is used when function is being created 

// const res=getName.bind(person2)
// res()



// ==============Arrow function always return the window as context of this keyword=====================

// person={
//         name:"Kev",
//         age:12,
//         getName:()=>{
//             console.log(this.name);
//         }
//     }
    
    
//     person.getName()


// =======================this keyword example=========================


// person1={name:"Kev",age:12}
// person2={name:"Len",age:19}

// function getName(){
//         console.log(this);
//     }

// getName.call(person1)
// create parent context as an object to the function getName using call method 







