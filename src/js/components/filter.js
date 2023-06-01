const filter = () => {
  const filterElem = document.querySelectorAll('.portfolio__item');
  const filterNav = document.querySelector('.portfolio__nav');
  const filterNavItems = document.querySelectorAll('.portfolio__nav-item');

  if (filterElem && filterNav && filterNavItems) {
    filterNav.addEventListener('click', (evt) => {
      let target = evt.target;
      let filterClass = evt.target.dataset['cat'];

      if(!target.classList.contains('portfolio__nav-item')) {
        return false;
      } else {
        filterNavItems.forEach(btn => {
          btn.classList.remove('portfolio__nav-item--active')
        });

        target.classList.add('portfolio__nav-item--active');
      }

      filterElem.forEach(function(el) {
        el.classList.remove('filter-show');
        el.classList.remove('filter-hide');

        if(el.classList.contains(filterClass)) {
          el.classList.add('filter-show');
        } else {
          el.classList.add('filter-hide');
        }
      });

    });
  }
};

export {filter};
