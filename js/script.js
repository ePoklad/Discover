  //Swiper
  const slider = new Swiper('.about__swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 10000,
    },
    effect: 'fade',
    slideToClickedSlide: true,
    loop:  true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //Burger
  const burger = document?.querySelector('[data-burger]');
  const header__nav = document?.querySelector('[data-header__nav]');
  const navItems = header__nav?.querySelectorAll('a');


  burger?.addEventListener('click', () => {
    document.body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    header__nav?.classList.toggle('header__nav--visible');
  });

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      document.body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      header__nav?.classList.remove('header__nav--visible');
    });
  });

   //search
  const headerOpen = document.querySelector('.header__search');
  const search = document.querySelector('.header__input');
  const searchClose = document.querySelector('.form__close');

  headerOpen.onmouseover = function () {
    search.classList.add("open");
  };

  headerOpen.onClick = function () {
    search.classList.add("open");
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("search-input").classList.remove("open");
    }
  });

  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(headerOpen);
    if ( ! withinBoundaries ) {
      search.classList.remove('open');
    }
  });



