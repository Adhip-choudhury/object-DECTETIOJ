object_status="";
objects=[];



function preload(){
    img=loadImage('dog_cat.jpg');
}


function setup(){
  canvas=createCanvas(500, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(500,400)
  video.hide();
  objectDetector=ml5.objectDetector("cocosst", modelLoaded);
}


function draw(){
    image(video, 0,  0, 500, 400);
        if(object_status != ""){  
          object_detector.detect(video, gotRuselt);
           var r= random(255);
           var g=random(255);
           var b=random(255);
           for(var i;  objects.length < i; i++){
           document.getElementById("status").innerHTML="Status: Detecting Object";
           fill(r,g,b);
           percent=Math.floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
           noFill();
           stroke(r,g,b);
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
           }

            
           }
      }   
    }


function modelLoaded(){
  object_status=true;
  object_detector.detect(video, gotRuselt);
}


function gotRuselt(error,ruselts){
  if(error){
    console.error(error);
  }
  else{
    console.log(ruselts);
  }
}