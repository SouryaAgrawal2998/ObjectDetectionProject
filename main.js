objectStatus= "";
function preload(){
    loadImage("");
}
function setup(){
    createCanvas(640,420);
    canvas.center();
    ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model has been loaded");
    objectStatus= true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    if(objectStatus!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML= "Status: Object Detected";
            fill('#ff0000');
            percent= floor(objects[i].confidence*100);
            text(objects[i].label+" "+ percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}