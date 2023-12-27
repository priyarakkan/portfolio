/**********
 *  NAV   *
 **********/
const menuBtn = document.querySelector('.menuIcon');
const closeBtn = document.querySelector('.closeIcon');
const navLinks = document.querySelector('.navLinks');

menuBtn.addEventListener('click',() => {
    navLinks.style.left = '0';
    });
closeBtn.addEventListener('click', () =>{
    navLinks.style.left = '-100%';
})