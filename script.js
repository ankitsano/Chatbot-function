let messages={
    "hi": "hello, how can I help you?",

    "hey" : "hello, how can I help you?",

    "how are you?" : "fine",

    "who are you?" :  "I am a bot",

};
const talk=()=>{
    let user=document.getElementById('user').value;
    document.getElementById('chatBlog').innerHTML += user+'<br>';
    if(user in messages){
        document.getElementById('chatBlog').innerHTML += messages[user]+'<br>';
    }else{
        document.getElementById('chatBlog').innerHTML +='Sorry i could not understand you!'
    }
}