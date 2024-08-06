let speech= new SpeechSynthesisUtterance(); 
let voiceSelect=document.querySelector("select")
let voices=[]

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices(); 
    console.log(voices[5])
    voices.forEach((voice,i)=>{
        voiceSelect.options[i]=new Option(voice.name,i) 
        speech.voice=voices[1]
    })
}

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]              
})

document.querySelector("button").addEventListener("click",()=>{
    speech.rate=0.8;
    speech.text=document.querySelector("textarea").value; 
    window.speechSynthesis.speak(speech)
})