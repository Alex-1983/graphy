const sliderTopFslightBox = () => {
  const sliderTopShots = document.querySelector('.slider-top');
  const sliderTopLightbox = new FsLightbox();

  if (sliderTopShots) {
    const sliderTopBtn = sliderTopShots.querySelectorAll('.shots__btn-small');

    sliderTopLightbox.props.sources = [
      "img/shots/small-img-1@1x.jpg",
      "img/shots/small-img-2@1x.jpg",
      "img/shots/small-img-3@1x.jpg",
      "img/shots/small-img-4@1x.jpg",
      "img/shots/small-img-5@1x.jpg",
      "img/shots/small-img-6@1x.jpg",
      "img/shots/small-img-7@1x.jpg",
      "img/shots/small-img-8@1x.jpg",
      "img/shots/small-img-9@1x.jpg",
      "img/shots/small-img-10@1x.jpg",
    ];

    sliderTopBtn.forEach((it, i) => {
      it.addEventListener('click', ()=> {
        sliderTopLightbox.open(i);
      });
    });
  }
};

export {sliderTopFslightBox};
