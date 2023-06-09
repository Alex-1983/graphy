import Swiper, { Navigation } from 'swiper';

const sliderServices = () => {
  const services = document.querySelector('.services');

  if (services) {
    const slider = services.querySelector('.swiper');
    const sliderBtnPrevious = services.querySelector('.services__button--prev');
    const sliderBtnNext = services.querySelector('.services__button--next');

    const swiper = new Swiper(slider, {
      modules: [Navigation],
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,

        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1170: {
          slidesPerView: 4,
        },
      },

      navigation: {
        nextEl: sliderBtnNext,
        prevEl: sliderBtnPrevious,
      },
    });
  }
};

export {sliderServices};
