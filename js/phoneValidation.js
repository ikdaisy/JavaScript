
import { phoneValidate } from "./externalModule.js"

document.getElementById("phone").addEventListener("keyup",(e)=>{

    document.getElementById("msg").innerHTML=phoneValidate(e.target.value)
})