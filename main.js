object_status="";




function preload(){
    img=loadImage('dog_cat.jpg');
}


function setup(){
  canvas=createCanvas(965, 544);
  canvas.position(180, 90);
  object_detector=ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="Status: Detecting Object";
}


function draw(){
    image(img, 0,  0, 965, 544);
    fill("red");
    text("Dog", 130,130);
    noFill();
    stroke("red");
    rect(120, 110, 700,400);

    noFill();
    noStroke();

    fill("yellow");
    text("Cat", 440,150);
    noFill();
    stroke("yellow");
    rect(430 ,130, 400,350);
    noStroke();
}


function modelLoaded(){
    console.log("Model is loaded......");
    object_status=true;
    object_detector.detect(img, gotRuselt);
}


function gotRuselt(error ,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
  }
}