const textarea = document.querySelector("textarea");
const btnSpeck = document.querySelector("button");

btnSpeck.addEventListener("click", () => {
  const textSpeck = new SpeechSynthesisUtterance(textarea.value);
  textSpeck.lang="en-ar"
  speechSynthesis.speak(textSpeck);
});
