var images = ['C:\Users\ELCOT\Desktop\Java_script\Images\img1.jpeg','C:\Users\ELCOT\Desktop\Java_script\Images\img2.jpeg'];
var num = 0;
function next() {
    var slider = document.getElemntById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}	