let speach = new SpeechSynthesisUtterance();

let voices = [];

let SeletVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speach.voice = voices[0];

  voices.forEach((voice, i) => {
    SeletVoice.options[i] = new Option(voice.name, i);
  });
};

SeletVoice.addEventListener("change", () => {
  speach.voice = voices[SeletVoice.value];
});

document.querySelector("button").addEventListener("click", function () {
  speach.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speach);
});
