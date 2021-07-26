var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start(){
    recognition.start();
document.getElementById("textBox").innerHTML="";
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    console.log(content);
}