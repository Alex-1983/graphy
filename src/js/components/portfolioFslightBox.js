require("fslightbox");

const portfolioFslightBox = () => {
  const btns = document.querySelectorAll('.portfolio__icon-btn');
  const lightbox = new FsLightbox();

  if (btns) {
    lightbox.props.sources = [
      "img/portfolio/reportage/img-1@1x.jpg",
      "img/portfolio/product/img-1@1x.jpg",
      "img/portfolio/portain/img-1@1x.jpg",
      "img/portfolio/wedding/img-1@1x.jpg",
      "img/portfolio/corporation/img-1@1x.jpg",
      "img/portfolio/wedding/img-2@1x.jpg",
      "img/portfolio/reportage/img-2@1x.jpg",
      "img/portfolio/product/img-2@1x.jpg",
      "img/portfolio/product/img-3@1x.jpg",
      "img/portfolio/reportage/img-3@1x.jpg",
      "img/portfolio/product/img-4@1x.jpg",
      "img/portfolio/corporation/img-2@1x.jpg",
      "img/portfolio/wedding/img-3@1x.jpg",
      "img/portfolio/corporation/img-3@1x.jpg",
      "img/portfolio/wedding/img-4@1x.jpg",
    ];

    btns.forEach((it, i) => {
      it.addEventListener('click', ()=> {
        lightbox.open(i);

      });
    });
  }
};

export {portfolioFslightBox};
