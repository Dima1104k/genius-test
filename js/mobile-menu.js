const mobilemenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.menu-btn-open');
const mobileBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobilemenu.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', toggleMenu);
mobileBtnClose.addEventListener('click', toggleMenu);
