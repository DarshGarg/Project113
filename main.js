function preload() {
}

function setup() {
    canvas = createCanvas(525,450);
    canvas.position(70,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 85, 85, 350, 280);

    stroke(168, 10, 10);
    fill(255, 0, 0);
    circle(50, 50, 75);
    circle(470, 50, 75);
    circle(470, 400, 75);
    circle(50, 400, 75);

    stroke(50, 168, 82);
    fill(34, 139, 34);
    rect(85, 35, 350, 25);
    rect(85, 385, 350, 30);
    rect(35, 85, 25, 280);
    rect(465, 85, 25, 280);

    stroke(50, 168, 82);
    fill(50, 168, 82);

}

function take_snapshot() {
    save("frame.png");
}