const menu = () => {
  const burger = document.querySelector('.burger');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const mainNav = document.querySelector('.main-nav');
  const mainNavBackdrop = document.querySelector('.main-nav__backdrop');
  const menuLinks = document.querySelectorAll('.js-scroll[data-goto]');

  function closeMenu() {
    const targetId = burger.getAttribute('data-target-id');
    const targetClassToggle = burger.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      body.classList.toggle('no-scroll');
      burger.classList.toggle('burger--close');
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }

  if (header && burger && body && mainNav && mainNavBackdrop) {
    burger.addEventListener('click', function() {
      closeMenu();
      if (!((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) && (header.classList.contains("header--white")))) {
        header.classList.toggle('header--white');
      }
    });

  // Прокрутка при клике

    if(menuLinks) {
      menuLinks.forEach(it => {
        it.addEventListener("click", function(evt) {
          const menuLink = evt.target;
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          const pageOffset = window.pageYOffset || document.documentElement.scrollTop;
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageOffset - document.querySelector('header').offsetHeight + 1;

          if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            if(burger.classList.contains('burger--close')) {
              body.classList.remove('no-scroll');
              burger.classList.remove('burger--close');
              mainNav.classList.remove('main-nav--open');
            }

            window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth"
            });

            evt.preventDefault();
          }
        });
      });
    }

    if(mainNavBackdrop) {
      mainNavBackdrop.addEventListener('click', function() {
        closeMenu();
        if ((header.classList.contains("header--white"))) {
          header.classList.toggle('header--white');
        }
      });
    }
  }
};

export {menu};
