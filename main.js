Webcam.set({
    width:350,
    height:400,
    image_format:"png",
    png_quality:10
})

camera = document.getElementById("camera")

Webcam.attach('#camera')

function takesnapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id=captureimage' src='"+ data_uri +"'/>"
    })

}



console.log(ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded)

function modelLoaded(){

console.log("Model Loaded")

}

function identifyimage(){
    
}
