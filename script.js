const menuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('.container nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
});

const arrowTop = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        arrowTop.classList.add('active')
    }
    else {
        arrowTop.classList.remove('active');
    }
})
    
ScrollReveal({ 
    reset: false,
    distance: '25px',
    duration: 2000,
    delay: 400
});
    
ScrollReveal().reveal('.menu-toggle', {delay: 200, origin: 'right',});
ScrollReveal().reveal('#navbar a', { delay: 300 , origin: 'left',});
ScrollReveal().reveal('#navbar li', { delay: 600 , origin: 'right',});
ScrollReveal().reveal('.title', { delay: 700 , origin: 'left',});
ScrollReveal().reveal('.hero', { delay: 800 , origin: 'bottom',});
ScrollReveal().reveal('.doodle', { delay: 1200 , origin: 'top',});
ScrollReveal().reveal('#about h1', { delay: 400 , origin: 'bottom',});
ScrollReveal().reveal('#about p', { delay: 600 , origin: 'top',});
ScrollReveal().reveal('.tree-card', { delay: 200 , origin: 'right',});
ScrollReveal().reveal('.tree-card .particle', { delay: 1200 , origin: 'bottom',});
ScrollReveal().reveal('.wave-card', { delay: 200 , origin: 'bottom',});
ScrollReveal().reveal('.wave-droplets', { delay: 1000 , origin: 'bottom',});
ScrollReveal().reveal('.cloud-dragon-card p', { delay: 600 , origin: 'bottom',});
ScrollReveal().reveal('.end-text .motto', { delay: 600 , origin: 'left',});
ScrollReveal().reveal('.end-text .sub-text', { delay: 600 , origin: 'right',});
ScrollReveal().reveal('.end-title .p1', { delay: 600 , origin: 'left',});
ScrollReveal().reveal('.end-title h1', { delay: 700 , origin: 'bottom',});
ScrollReveal().reveal('.end-title .p2', { delay: 600 , origin: 'right',});
ScrollReveal().reveal('.line', { delay: 500 , origin: 'top',});
ScrollReveal().reveal('#contact i', { delay: 600, origin: 'top', interval: 300});
