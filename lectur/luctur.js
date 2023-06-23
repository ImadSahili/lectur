const textarea = document.querySelector("textarea");
const btnSpeck = document.querySelector("i");

btnSpeck.addEventListener("click", () => {
  const textSpeck = new SpeechSynthesisUtterance(textarea.value);
  speechSynthesis.speak(textSpeck);
});



// التحقق مما إذا كان المتصفح يدعم واجهة التعرف على الكلام
if ('webkitSpeechRecognition' in window) {
  // إنشاء كائن لواجهة التعرف على الكلام
  var recognition = new webkitSpeechRecognition();

  // تعيين إعدادات لواجهة التعرف على الكلام
  recognition.lang = 'ar'; // تحديد اللغة للتعرف على الكلام (بالعربية)
  recognition.continuous =false; // التعرف على الكلام المستمر (بدون توقف)

  // تنفيذ عندما يتم الكشف عن كلام
  recognition.onresult = function(event) {
    var result = event.results[0][0].transcript; // الحصول على النص المحول

    // قم بتنفيذ الإجراءات المطلوبة مع النص
    console.log('النص المحول:', result);
  };

  // بدء عملية التعرف على الكلام
  recognition.start();
} else {
  console.log('عذرًا، واجهة التعرف على الكلام غير مدعومة في هذا المتصفح.');
}