import Swiper, { Navigation } from 'swiper';

const sliderServies = () => {
  const servies = document.querySelector('.servies');
 
  if (servies) {
    const slider = servies.querySelector('.swiper');
    const sliderBtnPrevious = servies.querySelector('.servies__button--prev');
    const sliderBtnNext = servies.querySelector('.servies__button--next');

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

export {sliderServies};
