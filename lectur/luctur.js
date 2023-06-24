// import translate from "google-translate-api"

const textarea = document.querySelector("textarea");
const btnSpeck = document.querySelector("i");
const btnMacro = document.querySelector("e");
const select = document.querySelector("select");
let lang = "ar-MA";


select.addEventListener("change", () => {
  lang = select.value;
});



btnSpeck.addEventListener("click", () => {
  const textSpeck = new SpeechSynthesisUtterance(textarea.value);
  textSpeck.lang=lang
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

