const toTop = () => {
  const toTopBtn = document.getElementById('to-top');
  if(toTopBtn) {
    toTopBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      let scroll = window.pageYOffset || document.documentElement.scrollTop;
      let targetTop = 0;
      let scrollDiff = (scroll - targetTop) * -1;
      animate({
        duration: 500,
        timing: function(timeFraction) {
          return Math.pow(timeFraction, 4); // https://learn.javascript.ru/js-animation
        },
        draw: function(progress) {
          var scrollNow = scroll + progress * scrollDiff;
          window.scrollTo(0,scrollNow);
        }
      });
    }, false);

    window.addEventListener('scroll', visibilityToggle);
    visibilityToggle();

  }

  function visibilityToggle() {
    if(window.pageYOffset >= 500) {
      document.getElementById('to-top').classList.add('to-top--visible');
    }
    else {
      document.getElementById('to-top').classList.remove('to-top--visible');
    }
  }

  function animate(_ref) {
    let timing = _ref.timing;
    let draw = _ref.draw;
    let duration = _ref.duration;
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
};

export {toTop};
