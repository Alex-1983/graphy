import Swiper, { Pagination } from 'swiper';

const sliderReviews = () => {
  const reviews = document.querySelector('.reviews');

  if (reviews) {
    const slider = reviews.querySelector('.swiper');
    
    const swiper = new Swiper(slider, {
      modules: [Pagination],
      loop: true,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };
};

export {sliderReviews};
