import Swiper, { Autoplay } from 'swiper';

const sliderBottomShots = () => {
  const sliderBottomShots = document.querySelector('.slider-bottom');

  if (sliderBottomShots) {
    const slider = sliderBottomShots.querySelector('.swiper');
    
    const swiper = new Swiper(slider, {
      modules: [Autoplay],
      slidesPerView: 'auto',

      autoplay: {
        delay: 4000,
      },
    });
  }
};

export {sliderBottomShots};
