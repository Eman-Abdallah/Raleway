var swiper = new Swiper(".mySwiper ", {
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
});
var swiper = new Swiper(".mySwiper2 ", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: -30,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


});
var swiper = new Swiper(".mySwiper3 ", {
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".mySwiper5 ", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    freeMode: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});