"use strict";

/*
This will cause the navbar menu to open and close by
clicking on the .hamburger-menu button
*/

const ham = document.querySelector('.header .navBar .hamburger-Menu');
const nav = document.querySelector('.header .navBar nav ');
ham.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');
})