var hbutton = document.getElementById('h-button'); // Assumes element with id='button'
var hmenu = document.getElementById('h-menu');
hbutton.onclick = function () {
    hmenu.classList.toggle('show');
};
hmenu.onclick = function () {
    hmenu.classList.toggle('show');
};

// var z = 0;
// var txt = "Las soluciones que t\u00FA necesitas,\nal alcance de tu bolsillo.";
// var speed = 50;

// function typeWriter() {
//     if (z < txt.length) {
//         document.getElementById("typingtext").innerHTML += txt.charAt(z);
//         z++;
//         setTimeout(typeWriter, speed);
//     }
// }

var repeater;
var slideIndex = 1;
showDivs(slideIndex);

// function slideShow() {
//     window.setInterval("plusDivs(1)", 5000)
// }

function cycle(r) {

    if (r) { // if r is true then clear and restart the timer
        clearInterval(repeater); // clear the timer
        repeater = setInterval(function () { // start the timer
            plusDivs(1);
        }, 6000);
    } else {
        clearInterval(repeater); // clear and stop the timer if r isn't true
    }
}

cycle(true);

function plusDivs(n) {
    cycle(true);
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    cycle(true);
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("imp-slide");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = 0;
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    window.setTimeout(function () {
        x[slideIndex - 1].style.opacity = 1;
    }, 200);
}

const stopVideos = () => {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });
};

function togglePopup() {
    var vpopup = document.getElementById('v-popup');
    var popupbutton = document.getElementById('v-popup-button');
    vpopup.classList.toggle('show');
    popupbutton.classList.toggle('show');

    // var popuppreview = document.getElementById('popup-preview');
    // popuppreview.classList.toggle('hide');
}