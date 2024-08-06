i=1
function asd(){
    document.write("*")
    i++
   setTimeout(()=>{

    if(i<=10){
        asd()
    }
   },1000)
}
asd()

