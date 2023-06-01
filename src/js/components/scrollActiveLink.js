const scrollActiveLink = () => {
  let sections = document.querySelectorAll('[data-block]');
  const header = document.querySelector('.header');

  if (sections && header) {
    window.addEventListener('scroll', () => {
      let scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
      sections.forEach((el, i) => {
          if (el.offsetTop - header.clientHeight <= scrollDistance) {
            document.querySelectorAll('.site-list__link').forEach((el) => {
              if (el.classList.contains('site-list__link--active')) {
                el.classList.remove('site-list__link--active');
              }
            });

            document.querySelectorAll('.site-list__item')[i].querySelector('.site-list__link').classList.add('site-list__link--active');
          }
        });

    });
  }
}

export {scrollActiveLink};
