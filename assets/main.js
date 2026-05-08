new Swiper('.reviewsSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    autoHeight: false,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.4,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        }
    }
});
