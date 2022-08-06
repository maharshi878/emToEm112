Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('how much info you need, greedy', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded() {
console.log('dedso rupiya lega model loaded bolne ke liye');
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}
function bol(){
var synth = window.speechSynthesis;
bakbak_data_1 = "The first prediction is " + prediction_1;
bakbak_data_2 = "And the second prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(bakbak_data_1 + bakbak_data_2);
synth.bol(utterThis);
}

function gotResult(error, results) {
  if (error) {
    console.error("dude keep eyes open when you code "+error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label
    document.getElementById("result_emotion_name2").innerHTML = results[1].label
    predicsan_1 = results[0].label
    predicsan_2 = results[1].label
    bol();
    if(results[0].label == "happy")
    {
      document.getElementById("update_emoji").innerHTML = "&#128522;";
    }
    if(results[0].label == "sad")
    {
      document.getElementById("update_emoji").innerHTML = "&#128532;";
    }
    if(results[0].label == "angry")
    {
      document.getElementById("update_emoji").innerHTML = "&#128548;";
    }
    if(results[1].label == "happy")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "sad")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if(results[1].label == "angry")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128548;";
    }
  }
}
