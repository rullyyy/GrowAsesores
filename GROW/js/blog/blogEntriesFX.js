let sideCard = document.getElementById("side-card-container");
let midCard1 = document.getElementById("mid-size-entry-1");
let midCard2 = document.getElementById("mid-size-entry-2");
document.querySelector('.side-card-container').addEventListener('mouseover', function () {

    sideCard.classList.add('scale');
    sideCard.style.cursor="pointer";
});

document.querySelector('.side-card-container').addEventListener('mouseout', function () {

    sideCard.classList.remove('scale');

}); 
document.querySelector('.mid-size-entry-1').addEventListener('mouseover', function () {

    midCard1.classList.add('scale');
    midCard1.style.cursor="pointer";

});

document.querySelector('.mid-size-entry-1').addEventListener('mouseout', function () {

    midCard1.classList.remove('scale');

}); 
document.querySelector('.mid-size-entry-2').addEventListener('mouseover', function () {

    midCard2.classList.add('scale');
    midCard2.style.cursor="pointer";
});

document.querySelector('.mid-size-entry-2').addEventListener('mouseout', function () {

    midCard2.classList.remove('scale');

}); 