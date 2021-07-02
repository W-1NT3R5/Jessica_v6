
//Initiating speech recognition API

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ; 
const recognition = new SpeechRecognition()

//websocket


//MAIN LISTENER
recognition.continuous = true;

recognition.onend = ()=>{
    recognition.start();
};

recognition.onstart = ()=>{

    console.log("Listening....");

};
recognition.onresult = async (event)=>{
    
    const current = await event.resultIndex;

    const transcript = await event.results[current][0].transcript;

    console.log(transcript);

    var sock = new WebSocket("ws://localhost:8080");

    sock.onopen = (e)=>{
        sock.send(transcript);
    };
    sock.onmessage = (e)=>{
        console.log(e.data);
        read(e.data);
    };
};
//MAIN LISTENER END

//start with the event click
window.onclick = ()=>{
    recognition.start();
}


//MAIN SPEAKER

function read(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text=message;
    speech.rate=1;
    speech.pitch=1.1;
    window.speechSynthesis.speak(speech);
};

//MAIN SPEAKER END


