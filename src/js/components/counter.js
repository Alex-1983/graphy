const counter = () => {
  const counter = document.querySelector(".counter");
  let interval = 6000;
  let flag = false;

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  if (counter) {
    let valueDisplays = counter.querySelectorAll(".counter__num");
    
    window.addEventListener('scroll', () => {
      const counterHeight = counter.offsetHeight;
      const counterOffset = offset(counter).top;
      const counterStart = 4;
      let counterPoint = window.innerHeight - counterHeight / counterStart;

      if(counterHeight > window.innerHeight) {
        counterPoint = window.innerHeight - window.innerHeight / counterStart;
      }

      if (!flag && (window.pageYOffset > counterOffset - counterPoint) && window.pageYOffset < (counterOffset + counterHeight)) {
        valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
              clearInterval(counter);
            }
          }, duration);
        });

        flag = true;
      }
    });
  }
};

export {counter};
