class Button{
    constructor(name){
        this.button=document.createElement("button")
        this.button.textContent=name
        document.body.appendChild(this.button)
    }

    setwidth(width){
        this.button.style.width=width+"px"
    }

    setheight(height){
        this.button.style.height=height+"px"
    }

    getwidth(){
        return parseInt(this.button.style.width)
    }

    getheight(){
        return parseInt(this.button.style.height)
    }
}


b=new Button("Click")


b.setwidth(200)
b.setheight(200)
console.log("Width is: ",b.getwidth());
console.log("Height is: ",b.getheight());




