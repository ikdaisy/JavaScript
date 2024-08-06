
// Callback func 
function sendMessage(msg){
    console.log("send message func");
    console.log(msg);
}

function getMessage(callback){
    console.log("getMsg func");
    callback("Hello")
}

getMessage(sendMessage)

