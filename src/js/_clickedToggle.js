export const clickedToggle = () => {
  class clickedToggleConig {
    constructor(target) {
      this.target = document.querySelector(target);
      this.targets = [].slice.call(document.querySelectorAll(target));
      this.isActive = 'is-active';
    }

    activeTarget() {
      this.targets.forEach((el) => {
        el.nextElementSibling.style.padding = '0 15px';
        el.addEventListener('click', (e) => {
          el.nextElementSibling.removeAttribute('style');
          this.targets.forEach((el) => {
            if (el !== e.target.parentElement) {
              el.classList.remove('is-active');
            }
          })

          el.classList.add('is-active');
        });
      });
    }
  }

  const clickedToggleConigAccordion = new clickedToggleConig('.js-accordion');
  clickedToggleConigAccordion.activeTarget();
}