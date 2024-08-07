 export function phoneValidate(phone){
    let regEx=/^[6-9]\d{2}-\d{3}-\d{4}/
    if(regEx.test(phone)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Invalid</span>`
    }

 }


 export function usernameValidate(username){
    let regEx=/^[a-z,A-Z,_]{3,}/
    if(regEx.test(username)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Invalid</span>`
    }
 }

 export function creditNumberValidate(creditNum){
    let regEx=/\d{4}-\d{4}-\d{4}-\d{4}/
    if(regEx.test(creditNum)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Invalid</span>`
    }
 }

 export function emailValidate(email){
    console.log(email);
    let regEx=/^[a-z][a-z,0-9,.]+@[a-z]+(\.[a-z])/
    if(regEx.test(email)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Invalid</span>`
    }
 }

