//https://teachablemachine.withgoogle.com/models/dMztmi9t_/
function record()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dMztmi9t_/model.json",modelReady)
}