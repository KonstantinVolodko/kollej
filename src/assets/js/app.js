document.addEventListener("DOMContentLoaded", () => {


    //= components/

    Fancybox.bind("[data-fancybox]", {
    });

    let mainbranchswiper = new Swiper(".main-branch__swiper", {
        navigation: {
          nextEl: ".main-branch__title .main-branch__arrowRight",
          prevEl: ".main-branch__title .main-branch__arrowLeft",
        },
        slidesPerView: 3,
        spaceBetween: 20,
    });
    

    let licenceSwiper = new Swiper(".main-licence__documentContainer", {
        navigation: {
          nextEl: ".main-licence__arrowsContainer .main-branch__arrowRight",
          prevEl: ".main-licence__arrowsContainer .main-branch__arrowLeft",
        },
        slidesPerView: 3,
        spaceBetween: 20,
    });

    let mainNewsSwiper = new Swiper(".main-news__content", {
        slidesPerView: 4,
        spaceBetween: 20,
    });

    let mainHowToLearnSwiper = new Swiper(".main-howToLearn__swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".main-howToLearn .main-branch__arrowRight",
            prevEl: ".main-howToLearn .main-branch__arrowLeft",
        },
    });

    let mainTeachersSwiper = new Swiper(".main-teachers__swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".main-teachers .main-branch__arrowRight",
            prevEl: ".main-teachers .main-branch__arrowLeft",
        },
    });
})



