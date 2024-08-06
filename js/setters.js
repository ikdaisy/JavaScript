class Button{
    constructor(name){
        this.button=document.createElement("button")
        this.button.textContent=name
        document.body.appendChild(this.button)
    }

    set width(width){
        this.button.style.width=width+"px"
    }

    set height(height){
        this.button.style.height=height+"px"
    }
}


b=new Button("Click")


b.width=200
b.height=200



