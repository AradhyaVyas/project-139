img = "";
status = "";

function preload()
{
    img = load_image("AC.jpeg");
    img = load_image("BedRoom.jpeg");
    img = load_image("Clock.jpeg");
    img = load_image("Door.jpeg");
    img = load_image("Fan.jpeg");
    img = load_image("Fruits.jpeg");
    img = load_image("Kitchen.jpeg");
    img = load_image("Toys.jpeg");
    img = load_image("TV.jpeg");
    img = load_image("Wardrobe.jpeg");
}

function setup()
{
    canvas = creatCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
       document.getElementById("status").innerHTML = "Status : Object Detected";
    
    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y +15);
    noFill();
    stroke("FF0000");
    Rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}

function modelLoaded() {
    console,log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
