function sendMsg(){
    var typing = document.getElementById('typing')
    var msg = document.getElementById('msg').value
    var msgList = document.getElementById('msgList')
    var greet = ['hi', 'hello', 'suno', 'hey', 'hii', 'sun', 'salam', 'assalam walaikum']
    if(event.keyCode == 13 || event.type == 'click'){
        msgList.innerHTML += `<li class='user'> ${msg} </li>`;
        document.getElementById('msg').value = ""
        if(greet.indexOf(msg.toLowerCase()) !== -1){
            typing.style.display = 'block'
            setTimeout(() => {
                msgList.innerHTML += `<li class='chatbot'>Hi!</li>`;
            }, 1000);
            setTimeout(() => {
                msgList.innerHTML += `<li class='chatbot'>How are you doing today?</li>`;
                typing.style.display = 'none'
            }, 3000);
        }else {
            typing.style.display = 'block'
            setTimeout(() => {
                msgList.innerHTML += `<li class='chatbot'>Sorry, I didn't understand that. Can you please rephrase?</li>`;
                typing.style.display = 'none'
            }, 1000);
        }
    }       
}