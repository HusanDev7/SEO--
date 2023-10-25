let togler = document.querySelector('.togler');
let headerList = document.querySelector('.header__list');

togler.addEventListener('click', () => {
    togler.classList.toggle('active');
    headerList.classList.toggle('active')
})