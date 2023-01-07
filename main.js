NX=0;
NY=0;
DIFF=0;
LW=0;
RW=0;

function preload(){}

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(988, 160);

    pn=ml5.poseNet(video, modelLoaded);

    pn.on("pose", gotPoses);
}

function draw(){
    background("#848482");

    stroke("red");
    fill("black");
    square(NX, NY, DIFF);

    document.getElementById("displayFORheightANDwidth").innerHTML="Height and Width of square is: "+DIFF+"px";
}

function modelLoaded(){
    console.log("ModelLoaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        NX=results[0].pose.nose.x;
        NY=results[0].pose.nose.y;
        console.log("NoseX="+NX+" NoseY="+NY);

        LW=results[0].pose.leftWrist.x;
        RW=results[0].pose.rightWrist.x;
        DIFF=floor(LW-RW);
        console.log(LW);
        console.log(RW);
        console.log("DIFFERENCE BETWEEN LWx AND RWx="+DIFF);
    }
}