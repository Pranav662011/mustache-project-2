function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on("pose", gotPoses);

}

function draw(){
image(video,0,0,500,500);
}
function take_snapshot(){
    save("MyFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet is initiated");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("mouth x = "+results[0].pose.nose.x);
        console.log("mouth y = "+results[0].pose.nose.y);

    }
}


    

