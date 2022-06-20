const styleButton = document.querySelector('.footer__theme-switcher');
const page = document.querySelector('.page');

page.setAttribute('data-theme', 'light');

function changeTheme() {
    if (page.getAttribute('data-theme') === 'light') {
        page.setAttribute('data-theme', 'dark');
    } else {
        page.setAttribute('data-theme', 'light');
    }
}

styleButton.addEventListener('click', changeTheme);