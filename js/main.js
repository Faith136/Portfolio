const btn = document.querySelector('button.menu-button');
const menu = document.querySelector('.m-list');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});