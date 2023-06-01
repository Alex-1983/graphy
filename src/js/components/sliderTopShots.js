import Swiper, { Autoplay } from 'swiper';

const sliderTopShots = () => {
  const sliderTopShots = document.querySelector('.slider-top');
 
  if (sliderTopShots) {
    const slider = sliderTopShots.querySelector('.swiper');

    const swiper = new Swiper(slider, {
      modules: [Autoplay],
      slidesPerView: 'auto',
  
      autoplay: {
        delay: 4000,
      },
    });
  };
};

export {sliderTopShots};
