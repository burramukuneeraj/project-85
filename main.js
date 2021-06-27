var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover2_width=100;
rover2_height=90;
rover2_x=10;
rover2_y=100;
rovern_width=100;
rovern_height=90;
rovern_x=10;
rovern_y=200;

rovern_image="v14.jpg";
background_image="bye.jpg";
rover2_image="hi.jpg";
function load(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;
    rover2_imagetag=new Image();
    rover2_imagetag.onload=uploadrover2;
    rover2_imagetag.src=rover2_image;
  rovern_imagetag=new Image();
    rovern_imagetag.onload=uploadrovern;
    rovern_imagetag.src=rovern_image;
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}
function uploadrover2(){
    ctx.drawImage(rover2_imagetag,rover2_x,rover2_y,rover2_width,rover2_height);
}
function uploadrovern(){
    ctx.drawImage(rovern_imagetag,rovern_x,rovern_y,rovern_width,rovern_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="87") {
        up2();
        console.log("movingup");
    }
    if (keyPressed=="83") {
        down2();
        console.log("movingdown");
    }
    if (keyPressed=="65") {
        left2();
        console.log("movingleft");
    }
    if (keyPressed=="68") {
        right2();
        console.log("movingright");
    }
   if (keyPressed=="38") {
        upn();
        console.log("movingup");
    }
    if (keyPressed=="40") {
        downn();
        console.log("movingdown");
    }
    if (keyPressed=="37") {
        leftn();
        console.log("movingleft");
    }
    if (keyPressed=="39") {
        rightn();
        console.log("movingright");
    }
}
function up2(){
    if (rover2_y>=0) {
        rover2_y=rover2_y-10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function down2(){
    if (rover2_y<=300) {
        rover2_y=rover2_y+10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function left2(){
    if (rover2_x>=0) {
        rover2_x=rover2_x-10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function right2(){
    if (rover2_x<=700) {
        rover2_x=rover2_x+10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
  
}






































































function upn(){
    if (rovern_y>=0) {
        rovern_y=rovern_y-10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function downn(){
    if (rovern_y<=300) {
        rovern_y=rovern_y+10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function leftn(){
    if (rovern_x>=0) {
        rovern_x=rovern_x-10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}
function rightn(){
    if (rovern_x<=700) {
        rovern_x=rovern_x+10;
        uploadbackground();
        uploadrovern();
        uploadrover2();
    }
}