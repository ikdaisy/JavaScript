class Person{
   constructor(name){
    this.name=name
   }

   display(){
    console.log("hello I'm ",this.name);
   }


}

class Kevin extends Person{
    constructor(){
        super('Kevin')
        
    }

    display(age){
        console.log("Age is ",age);
    }


}


var kevin = new Kevin()
kevin.display(21)
var person =new Person()
person.display("")

