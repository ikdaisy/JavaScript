

import { creditNumberValidate } from "./externalModule.js"

document.getElementById("creditNum").addEventListener("keyup",(e)=>{

    document.getElementById("msg").innerHTML=creditNumberValidate(e.target.value)
})