let nav = document.querySelector('header nav');

document.onscroll = () => {
    nav.classList.remove('active');
}

document.querySelector('#menu-but').onclick = () => {
    nav.classList.toggle('active');
}

document.querySelectorAll('#contact .row .faq .box h4').forEach(el => {
    el.onclick = () => {
        document.querySelectorAll('#contact .row .faq .box').forEach(box => {
            box.classList.remove('active');
        });
        el.parentElement.classList.add('active');
    }
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    breakpoints: {
        768: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 2
        },
      },
    pagination: {
        el: ".swiper-pagination",
    },
});