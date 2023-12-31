
//detecting button press
var no_btn = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_btn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var btnletter = this.innerHTML;
        makesound(btnletter);
        btnanimation(btnletter);

    });

}
// hello everyone
//detecting key press
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    btnanimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        default: console.log(btnletter);
            break;
    }
}


function btnanimation(currentkey)
{

    var activebtn = document.querySelector("."+ currentkey);
    activebtn.classList.add("pressed");

    setTimeout (function() {
        activebtn.classList.remove("pressed");
    } ,100);
}