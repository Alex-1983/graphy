import Swiper, { Pagination } from 'swiper';

const sliderPrice = () => {
  const price = document.querySelector('.price');
  let swiper;

  if (price) {
    const slider = price.querySelector('.swiper');

    function mobileSlider() {
      if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
        swiper = new Swiper(slider, {
          modules: [Pagination],
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          slideClass: 'price-card',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
          swiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }
};

export {sliderPrice};
