const textarea = document.querySelector("textarea");
const btnSpeck = document.querySelector("i");
const btnMacro = document.querySelector("e");
const select = document.querySelector("select");
const btnCop = document.getElementById("copy");
let lang = "ar-MA";

select.addEventListener("change", () => {
  lang = select.value;
  if (lang === "ar-MA") {
    document.documentElement.lang = "ar-MA";
    document.documentElement.dir = "rtl";
    textarea.placeholder = " ادخل النص ";
    document.documentElement.lang = "ar-MA";
  } else if (lang === "en-US") {
    document.documentElement.lang = "en-US";
    document.documentElement.dir = "trl";
    textarea.placeholder = "Enter the text";
  } else if (lang === "fr-FR") {
    document.documentElement.lang = "fr-FR";
    document.documentElement.dir = "trl";
    textarea.placeholder = "Entrez le texte";
  }
});

btnSpeck.addEventListener("click", () => {
  const textSpeck = new SpeechSynthesisUtterance();
  textSpeck.lang = lang;
  textSpeck.text = textarea.value;
  // textSpeck.voice=speechSynthesis.getVoices().find(voice=>voice.name=='Google Français')
  // textSpeck.rate=0.5
  // textSpeck.volume=.5
  // const voice=speechSynthesis.getVoices
  // voice.forEach(function(voice,index){
  //   console.log(voice.name+" "+index)
  // })
  speechSynthesis.speak(textSpeck);
});

function startSpeechRecognition() {
  // التحقق مما إذا كان المتصفح يدعم واجهة التعرف على الكلام
  if ("webkitSpeechRecognition" in window) {
    // إنشاء كائن لواجهة التعرف على الكلام
    var recognition = new webkitSpeechRecognition();
    // تعيين إعدادات لواجهة التعرف على الكلام
    recognition.lang = lang; // تحديد اللغة للتعرف على الكلام (بالعربية)
    recognition.continuous = false; // التعرف على الكلام المستمر (بدون توقف)

    // تنفيذ عندما يتم الكشف عن كلام
    recognition.onresult = function (event) {
      var result = event.results[0][0].transcript; // الحصول على النص المحول

      // قم بتنفيذ الإجراءات المطلوبة مع النص
      textarea.value = result;
      console.log("النص المحول:", result);
    };

    // بدء عملية التعرف على الكلام
    recognition.start();
    // recognition.onend=function(){
    //   console.log("s")
    // }
  } else {
    console.log("عذرًا، واجهة التعرف على الكلام غير مدعومة في هذا المتصفح.");
  }
}

btnMacro.addEventListener("click", () => {
  startSpeechRecognition();
});

btnCop.addEventListener("click", () => {
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(textarea.value);
});
