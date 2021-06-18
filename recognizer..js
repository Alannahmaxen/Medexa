Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90

});
Webcam.attach('#camera');
camera = document.getElementById("camera");

function take_snapshot() 
{
  Webcam.snap(function(data_uri) {
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>' 
});

}

console.log('ml5 version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7E9FvQfCr/model.json',modelLoaded);

function modelLoaded() 
{
   console.log('model loaded !');
}

 function check() {
   img = document.getElementById('captured_image');
   classifier.classify(img, gotResult);
   
 }

 function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     speaks(results);
    }
  }

  function speaks(results) 
  {
    if(results[0].label == "Dolo-650")
    {
      var synth = window.speechSynthesis;
  speak_data  =  "This medicine is Dolo SOS"
   var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 }

 if(results[0].label == "Zoryl-M2")
 {
   var synth = window.speechSynthesis;
speak_data  =  "This medicine is Zoryl-M2 eat it in the morning, afternoon and night"
var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

if(results[0].label == "Dilzem-SR 90")
{
  var synth = window.speechSynthesis;
speak_data  =  "This medicine is Dilzem eat it in the morning"
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
}

if(results[0].label == "Clopivaz")
{
  var synth = window.speechSynthesis;
speak_data  =  "This medicine is Clopivaz eat it in the afternoon"
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
}


if(results[0].label == "Ecosprin-75g")
{
  var synth = window.speechSynthesis;
speak_data  =  "This medicine is Ecosprin eat it in the afternoon"
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
}
    
}
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
  