// Displaying the sections on click in mobile + ipad view

const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(`#${toggleId}`);
    const nav = document.querySelector(`#${navId}`);

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav__toggle', 'nav__menu');


// Remove Menu bar from the bottom/footer

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.querySelector('#nav__menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


// Swiper Class To Perform Carousel Effect on Projects and Certification Sections
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


// Displaying The Scroll Button
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// function loadskills() {
//     const htmlSkill = document.querySelector('.html5');
//     const cssSkill = document.querySelector('.css3');
//     const jsSkill = document.querySelector('.js');
//     const bootstrapSkill = document.querySelector('.bootstrap5');
//     const adobeSkill = document.querySelector('.adobexd');
//     if (this.scrollY > 1900) {
//         htmlSkill.classList.add('html_skill');
//         cssSkill.classList.add('css_skill');
//         jsSkill.classList.add('js_skill');
//         bootstrapSkill.classList.add('.bootstrap_skill');
//         adobeSkill.classList.add('.adobe_skill');
//     }
//     else {
//         htmlSkill.classList.remove('html_skill');
//         cssSkill.classList.remove('css_skill');
//         jsSkill.classList.remove('js_skill');
//         bootstrapSkill.classList.remove('.bootstrap_skill');
//         adobeSkill.classList.remove('.adobe_skill')
//     }
// }
// window.addEventListener('scroll', loadskills)


// Changing The Theme to Dark/Light Mode
const themeButton = document.getElementById('night-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})