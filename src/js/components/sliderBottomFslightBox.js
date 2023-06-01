const sliderBottomFslightBox = () => {
  const sliderBottomShots = document.querySelector('.slider-bottom');
  const sliderBottomLightbox = new FsLightbox();

  if (sliderBottomShots) {
    const sliderBottomBtn = sliderBottomShots.querySelectorAll('.shots__btn-large');

    sliderBottomLightbox.props.sources = [
      "img/shots/large-img-1@1x.jpg",
      "img/shots/large-img-2@1x.jpg",
      "img/shots/large-img-3@1x.jpg",
      "img/shots/large-img-4@1x.jpg",
      "img/shots/large-img-5@1x.jpg",
      "img/shots/large-img-6@1x.jpg",
    ];

    sliderBottomBtn.forEach((it, i) => {
      it.addEventListener('click', ()=> {
        sliderBottomLightbox.open(i);
      });
    });
  }
};

export {sliderBottomFslightBox};
