const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');

btnPopup.addEventListener('click', () => {
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

loginLink.addEventListener('click', () => {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

registerLink.addEventListener('click', () => {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    wrapper.style.display = 'none';
});
