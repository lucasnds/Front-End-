const xIcon = document.querySelector('.fa-solid.fa-x');
const barsIcon = document.querySelector('.fa-solid.fa-bars');

barsIcon.addEventListener('click', function() {
    xIcon.style.visibility = "visible";
    barsIcon.style.visibility = "hidden";

});