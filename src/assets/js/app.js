document.addEventListener("DOMContentLoaded", () => {
  //= components/

  Fancybox.bind("[data-fancybox]", {});

  let mainbranchswiper = new Swiper(".main-branch__swiper", {
    navigation: {
      nextEl: ".main-branch .main-branch__arrowRight",
      prevEl: ".main-branch .main-branch__arrowLeft",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      651: {
        slidesPerView: 2,
      },
    },
  });

  let licenceSwiper = new Swiper(".main-licence__documentContainer", {
    navigation: {
      nextEl: ".licenceArrowRight",
      prevEl: ".licenceArrowLeft",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      500: {
        slidesPerView: 2,
      },
    },
  });

  let accreditationSwiper = new Swiper(
    ".main-accreditation__documentContainer",
    {
      navigation: {
        nextEl: ".accreditationArrowRight",
        prevEl: ".accreditationArrowLeft",
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },

        500: {
          slidesPerView: 2,
        },
      },
    }
  );

  let mainNewsSwiper = new Swiper(".main-news__content", {
    slidesPerView: 4,
    spaceBetween: 20,
  });

  let mainHowToLearnSwiper = new Swiper(".main-howToLearn__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".main-howToLearn .main-branch__arrowRight",
      prevEl: ".main-howToLearn .main-branch__arrowLeft",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });

  let mainTeachersSwiper = new Swiper(".main-teachers__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".main-teachers .main-branch__arrowRight",
      prevEl: ".main-teachers .main-branch__arrowLeft",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 2,
      },
    },
  });

  let mainReviewsSwiper = new Swiper(".main-reviews__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".main-reviews .main-branch__arrowRight",
      prevEl: ".main-reviews .main-branch__arrowLeft",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      650: {
        slidesPerView: 2,
      },
    },
  });
});

const dropdowns = document.querySelectorAll(".dropdown-container");

if (dropdowns.length) {
  dropdowns.forEach((el, i) => {
    const dropdownLink = el.querySelector(".dropdown-link");
    const dropdownList = el.querySelector(".dropdown-list");

    if (el.classList.contains("active")) {
      dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
    }

    dropdownLink.addEventListener("click", function () {
      el.classList.toggle("active");

      if (dropdownList.style.maxHeight) {
        dropdownList.style.maxHeight = null;
      } else {
        dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
      }
    });
  });
}
