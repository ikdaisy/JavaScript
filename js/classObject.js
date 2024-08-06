class Vehicle{
    wheel=4;
    color="red"

    constructor (model){
        this.model = model
        console.log("This is constructor");
        console.log("Model is :",this.model);
    }
    working(){
        console.log("Working");
        console.log("Color:",this.color);

    }
}


car=new Vehicle("Porche")
car.working()