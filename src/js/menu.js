import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;
const breakpoint = 1024;
let lastWW = window.innerWidth;

export const togggleMenu = () => {
  class HamburgerMenuSetteikun {
    constructor(menuId) {
      this.menu = document.getElementById(menuId);
      this.menu.style.transform = 'translateX(100%)';
      this.toggleSwitch = false;
    }

    setBtn(btnId) {
      const btn = document.getElementById(btnId);
      const btnLines = btn.querySelectorAll('.js-hamburger-line');

      btn.addEventListener('click', () => {
        this.hideAndShow(btnLines);
      })

      window.addEventListener('resize', () => {
        let currentWW = window.innerWidth;

        if (lastWW <= breakpoint && breakpoint < currentWW) {
          //PCの処理
          this.menu.style.transform = 'translateX(0%)';
          this.menu.style.opacity = 1;
          this.resetHamburgerLine(btnLines);
          this.toggleSwitch = false;
        } else if (currentWW <= breakpoint && breakpoint < lastWW) {
          //SPの処理
          this.menu.style.transform = 'translateX(100%)';
          this.menu.style.opacity = 0;
          this.resetHamburgerLine(btnLines);
          this.toggleSwitch = false;
        }

        lastWW = currentWW;
      });
    }

    hideAndShow(btnLines) {
      if (this.toggleSwitch === false) {
        this.menu.style.transform = 'translateX(0%)';
        this.menu.style.opacity = 1;
        this.rotateHamburgerLine(btnLines);
        this.toggleSwitch = true;
      } else {
        this.menu.style.transform = 'translateX(100%)';
        this.menu.style.opacity = 0;
        this.resetHamburgerLine(btnLines);
        this.toggleSwitch = false;
      }
    }

    rotateHamburgerLine(btnLines) {
      btnLines[0].style.transform = 'translateY(10px) rotate(405deg)';
      btnLines[1].style.opacity = '0';
      btnLines[2].style.transform = 'translateY(-10px) rotate(-405deg)';
    }

    resetHamburgerLine(btnLines) {
      btnLines[0].style.transform = 'translateY(0px) rotate(0deg)';
      btnLines[1].style.opacity = '1';
      btnLines[2].style.transform = 'translateY(0px) rotate(0deg)';
    }
  }

  const setteikunitigou = new HamburgerMenuSetteikun('js-menu');
  setteikunitigou.setBtn('js-hamburger');
}