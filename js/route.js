function route(time){
    if(time=="5-8" || time=="11-3" || time=="9-5")
        alert("The best route is Highway")
    else if(time=="8-11" || time=="3-9")
        alert("The best route is pipeline")
    else{
        alert("Invalid")
    }
}



time=prompt("Enter the time: ")
route(time)

