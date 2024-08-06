function timer(){
    let date = new Date()
    hours=date.getHours()
    ampm=hours<12?"AM":"PM"
    hr=hours%12==0?12:hours%12;
    document.getElementById("time").textContent=`${putZero(hr)} - ${putZero(date.getMinutes())} - ${putZero(date.getSeconds())} ${ampm}`
    document.getElementById("date").textContent=` ${putZero(date.getDate())}-${putZero(date.getMonth()+1)}-${date.getFullYear()}`
    const bgimage = document.getElementById("image")
    bgimage.style.objectFit="cover"
    bgimage.style.backgroundSize="cover"
    if(hours>=6 && hours<=19){
         bgimage.style.backgroundImage="url('../images/day.jpg')"
       
    }
    else{
       document.getElementById("time").style.color="white"
        document.getElementById("date").style.color="white"
        bgimage.style.backgroundImage="url('../images/night.jpg')"
    }
    setTimeout(()=>{
        timer()
    },1000)

   
}

timer()

function putZero(time){
    return time<10?"0"+time:time;

}