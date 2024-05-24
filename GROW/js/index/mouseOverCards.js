let description1 = document.getElementById("description-1");
let title = document.getElementById("title-1");
let info = document.getElementById("info-1");
let cta_banner = document.getElementById("cta-banner");

document.querySelector('.description-1').addEventListener('mouseover', function () {
    description1.style.cursor = "pointer";
    description1.classList.add('glow');
    description1.classList.add('scale');
    title.style.cursor = "pointer";
    info.style.cursor = "pointer";
    description1.style.opacity = "0.8";
});

document.querySelector('.description-1').addEventListener('mouseout', function () {
    description1.classList.remove('glow');
    description1.classList.remove('scale');
    description1.style.cursor = "auto";
    description1.style.opacity = "1";
});

document.querySelector('.main-banner-information-cta-btn').addEventListener('mouseover', function () {
    cta_banner.classList.add('glow');
});
document.querySelector('.main-banner-information-cta-btn').addEventListener('mouseout', function () {
    cta_banner.classList.remove('glow');
});