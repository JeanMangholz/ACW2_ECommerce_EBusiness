/*
 * Rollover : changing images with the mouse
 */ 

if (document.images) {
    img1on = new Image();           // Active images
    img1on.src = "../img/image1_rolloveron.jpg";
    img2on = new Image();
    img2on.src = "../img/image2_rolloveron.jpg";
    img1off = new Image();          // Inactive images
    img1off.src = "../img/image2_rolloveroff.jpg";
    img2off = new Image();
    img2off.src = "../img/image1_rolloveroff.jpg";
}
function imgOn(imgName) {
    if (document.images) {
        document[imgName].src = eval(imgName + "on.src");
    }
}
function imgOff(imgName) {
    if (document.images) {
        document[imgName].src = eval(imgName + "off.src");
    }
}

