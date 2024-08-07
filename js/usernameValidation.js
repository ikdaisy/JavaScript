import { usernameValidate } from "./externalModule.js"

document.getElementById("username").addEventListener("keyup",(e)=>{

    document.getElementById("msg").innerHTML=usernameValidate(e.target.value)
})