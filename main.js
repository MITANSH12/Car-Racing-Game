canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "car2.jpg"
car2_x = 10;
car2_y = 100;

background_image = "car.gif";

function add() {
    backgroundImgTag = new Image;
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = background_image;

    car1ImgTag = new Image;
    car1ImgTag.onload = uploadcar1;
    car1ImgTag.src = car1_image;

    car2ImgTag = new Image;
    car2ImgTag.onload = uploadcar2;
    car2ImgTag.src = car2_image;

    
    
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag ,  0 , 0 , canvas.width , canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1ImgTag ,  car1_x , car1_y , car1_width , car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2ImgTag ,  car2_x , car2_y , car2_width , car2_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
  keyPressed = e.keycode;
  console.log(keyPressed);
if (keyPressed == "38" ) {
   car1_up();
   console.log("up key");

}

if (keyPressed == "40" ) {
    car1_down();
    console.log("down key");
    
 }

 if (keyPressed == "37" ) {
    car1_left();
    console.log("left key");
    
 }

 if (keyPressed == "39" ) {
    car1_right();
    console.log("right key");
    
 }
 if (keyPressed == "87" ) {
    car2_up();
    console.log("w key");
    
 }
 if (keyPressed == "83" ) {
    car2_down();
    console.log("s key");
    
 }

 if (keyPressed == "65" ) {
    car2_left();
    console.log("a key");
    
 }

 if (keyPressed == "68" ) {
    car2_right();
    console.log("d key");
    
 }
 
 
} 
