let offer = document.body.querySelector('.offer');
let offerMenu = document.body.querySelector('.header__complex--form');
offer.onclick = function () {
    offerMenu.classList.toggle('active');
};
var mybutton = document.getElementById("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
