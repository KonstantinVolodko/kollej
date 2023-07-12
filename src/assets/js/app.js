document.addEventListener("DOMContentLoaded", () => {
  //= components/

  const xl = matchMedia('(max-width: 1024px)');

  Fancybox.bind("[data-fancybox]", {});

  const header = document.querySelector('.header');

  if (header) {
    let headerH = header.getBoundingClientRect().height;

    document.documentElement.style.setProperty('--headerH', headerH + 'px')

    window.addEventListener('resize', () => {
      const header = document.querySelector('.header');
      headerH = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--headerH', headerH + 'px')
    })
  }

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

  new Swiper(".mattech-swiper", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    }
  })

  let init = false;
  let swiperDostup;
  function swiperCard() {
    if (xl.matches) {
      if (!init) {
        init = true;
        swiperDostup = new Swiper(".dostupenv-swiper", {
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 20,
        });
      }
    } else if (init) {
      swiperDostup.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);

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
          if (window.matchMedia("(min-width: 1024px)").matches) {
            document.querySelector('.modal-content').style.height = "100%"
          }
          
        } else {
          dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
          if (window.matchMedia("(min-width: 1024px)").matches) {
            document.querySelector('.modal-content').style.height = "fit-content"
          }
          
        }
      });
    });
  }

  const aside = document.querySelector('.info-aside');

  if (aside) {
    const active = aside.querySelector('.active');
    if (active) {
      const infoAside = document.createElement('div');
      infoAside.classList.add('info-aside-select');
      infoAside.innerHTML = active.innerHTML;
      infoAside.addEventListener('click', function () {
        this.classList.toggle('active');
      })
      aside.parentElement.insertBefore(infoAside, aside);
    }

  }


  class Modal {
    constructor(modalId, openButtons) {
      this.modal = document.getElementById(modalId);
      this.openButtons = [];

      if (typeof openButtons === 'string') {
        // Если передана строка, считаем это классом
        this.openButtons = Array.from(document.getElementsByClassName(openButtons));
      } else if (Array.isArray(openButtons)) {
        // Если передан массив, считаем это идентификаторами
        this.openButtons = openButtons.map(buttonId => document.getElementById(buttonId));
      }

      this.openButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.open();
          this.disableBodyScroll();
        });
      });

      window.addEventListener('click', (event) => {
        if (event.target === this.modal) {
          this.close();
          this.enableBodyScroll();
        }
      });

      const closeButton = this.modal.querySelector('.close');
      closeButton.addEventListener('click', () => {
        this.close();
        this.enableBodyScroll();
      });
    }

    open() {
      this.modal.style.display = 'block';
      setTimeout(() => {
        this.modal.classList.add('open');
      }, 10);
    }

    close() {
      this.modal.classList.remove('open');
      setTimeout(() => {
        this.modal.style.display = 'none';
      }, 300);
    }

    disableBodyScroll() {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (window.matchMedia("(min-width: 1024px)").matches) {
        document.body.style.paddingRight = scrollBarWidth + 'px';
      }
      document.body.style.overflow = 'hidden';
    }

    enableBodyScroll() {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        document.body.style.paddingRight = '';
      }
      document.body.style.overflow = '';
    }
  }

  const headerMenu = new Modal('modal', 'header-upperContainer__burgerContainer');

  let phoneContainer = document.querySelector('.header-upperContainer__phoneContainer')
  let modalPhoneHelper = document.querySelector('.modal-content__phoneHelper')
  let modalLicenceHelper = document.querySelector('.modal-content__licenceHelper')
  let licenceContainer = document.querySelector('.header-upperContainer__licence')

  if (window.matchMedia("(max-width: 1024px)").matches) {
    modalPhoneHelper.innerHTML = phoneContainer.innerHTML
    modalLicenceHelper.innerHTML = licenceContainer.innerHTML
  }

  let date = document.querySelector('.footer-politick p span')
  date.innerHTML = new Date().getFullYear()


});


