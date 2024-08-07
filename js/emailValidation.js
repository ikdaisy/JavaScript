
import { emailValidate } from "./externalModule.js"

document.getElementById("email").addEventListener("keyup",(e)=>{
    
    document.getElementById("msg").innerHTML=emailValidate(e.target.value)
})