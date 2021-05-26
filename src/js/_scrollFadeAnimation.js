export const scrollAnimation = () => {
  // targetはclass名のみ対応。
  const getTargetPos = function (target) {
    const el = document.querySelectorAll(target).slice.call(el);
    const elLength = el.length;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < elLength; i++) {
      let elHeight = el[i].offsetHeight;
      let elOffsetY = el[i].getBoundingClientRect().top;
      let elPos = elOffsetY - windowHeight;

      el[i].classList.add('target-fade');

      if (!el[i].getAttribute('data-animation-flag')) {
        el[i].dataset.animationFlag = "false";
      }

      if (-windowHeight <= (elPos + elHeight) && elPos < -windowHeight / 4) {
        if (el[i].getAttribute('data-animation-flag') === 'false') {
          el[i].setAttribute('data-animation-flag', true);

          if (target === '.js-fade-in-under-line' || target === '.js-show-graph') {
            (function(pram) {
              setTimeout(function() {
                el[pram].classList.add('is-active');
              }, pram * 50);
            })(i);
          } else {
            if (!el[i].classList.contains('is-active')) {
              el[i].classList.add('is-active');
            }
          }
        }
      }
    }
  };

  getTargetPos('.js-fade');

  // scrollイベント
  window.addEventListener('scroll', () => {
    getTargetPos('.js-fade');
  });
}