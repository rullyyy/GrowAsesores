let loginBtn = document.getElementById("login-btn");

document.querySelector('.login-btn').addEventListener('mouseover', function () {

    loginBtn.classList.add('glow');

});

document.querySelector('.login-btn').addEventListener('mouseout', function () {

    loginBtn.classList.remove('glow');

});