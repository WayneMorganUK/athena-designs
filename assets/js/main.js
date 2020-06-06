const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu =false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  menuNav.classList.toggle('open');
  navItems.forEach(item => item.classList.toggle('open'));
  showMenu = !showMenu
  /* if(!showMenu) {
    showMenu = true;
  } else {
    showMenu = false;
  } */
}
/* function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
} */

