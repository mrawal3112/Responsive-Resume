const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(`#${toggleId}`);
    const nav = document.querySelector(`#${navId}`);
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav__toggle', 'nav__menu');


const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.querySelector('#nav__menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(function (n) {
    n.addEventListener('click', linkAction);
})

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(function () {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionID = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.remove('active-link');
        }
    })
}
let swiper = new Swiper(".project__container,.certification__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});
