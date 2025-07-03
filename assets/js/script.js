const openMenu = document.querySelector('.open-menu'),
closeMenu = document.querySelector('.close-menu'),
menu = document.querySelector('header nav');

openMenu.addEventListener('click', ()=> {
    menu.style.display = 'block';
})

closeMenu.addEventListener('click', ()=> {
    menu.style.display = 'none';
})
