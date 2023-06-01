const scrollChangeHeader = () => {
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add('header--white');
      } else {
        header.classList.remove('header--white');
      }
    });
  }
};

export {scrollChangeHeader};
