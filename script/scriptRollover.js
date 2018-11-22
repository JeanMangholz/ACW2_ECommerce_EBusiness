/*
 * Rollover : changing images with the mouse
 */ 

if (document.images) {
    img1on = new Image();           // Active images
    img1on.src = "../img/woman_unsplash_rolloveron.jpg";
    img2on = new Image();
    img2on.src = "../img/man_unsplash_rolloveron.jpg";
    img1off = new Image();          // Inactive images
    img1off.src = "../img/man_unsplash_rolloveroff.jpg";
    img2off = new Image();
    img2off.src = "../img/woman_unsplash_rolloveroff.jpg";
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

