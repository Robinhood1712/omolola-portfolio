const menu = document.querySelector('.menu img');
const closeModal = document.querySelector('.close-modal'); 
const navBar = document.querySelector('.navbar');
// const closeModal = document.querySelector('close-modal');

menu.addEventListener('click', toggleMenu);
closeModal.addEventListener('click', closeMenu)


function toggleMenu(){
    navBar.classList.toggle('active');
    menu.classList.add('close');
    closeModal.classList.add('active');
}

function closeMenu(){
    closeModal.classList.remove('active');
    navBar.classList.remove('active');
    menu.classList.remove('close');
}

const navbarAll = document.querySelectorAll('.navbar');

navbarAll.forEach(nav => {
    nav.addEventListener('click', ()=> {
        navBar.classList.remove('active');
        closeModal.classList.remove('active');
        menu.classList.remove('close');
    } )
})

window.onscroll= () => {
    menu.classList.remove('close');
    navBar.classList.remove('active');
    closeModal.classList.remove('active');
}