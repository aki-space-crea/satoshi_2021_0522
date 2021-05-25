const breakpoint = 1024;
let lastWW = window.innerWidth;

export const togggleMenu = () => {
  class HamburgerMenuSetteikun {
    constructor(menuId) {
      this.currentWW = 0;
      this.isPc = () => {
        return this.current = window.innerWidth;
      }

      this.menu = document.getElementById(menuId);
      this.menu.style.transform = this.isPc() >= 1024 ? 'translateX(0%)' : 'translateX(100%)';
      this.toggleSwitch = false;
    }

    setBtn(btnId) {
      const btn = document.getElementById(btnId);
      const btnLines = btn.querySelectorAll('.js-hamburger-line');
      const closedMenuBg = document.getElementById('js-closed-menu-bg');

      btn.addEventListener('click', () => {
        this.hideAndShow(btnLines);
      })

      closedMenuBg.addEventListener('click', () => {
        this.hideAndShow(btnLines);
      })

      window.addEventListener('resize', () => {
        const closedMenuBg = document.getElementById('js-closed-menu-bg');
        this.currentWW = window.innerWidth;

        if (lastWW <= breakpoint && breakpoint < this.currentWW) {
          //PCの処理
          this.menu.style.transform = 'translateX(0%)';
          this.menu.style.opacity = 1;
          this.resetHamburgerLine(btnLines);
          this.toggleSwitch = false;
          closedMenuBg.style.opacity = 0;
          closedMenuBg.style.visibility = 'hidden';
        } else if (this.currentWW <= breakpoint && breakpoint < lastWW) {
          //SPの処理
          this.menu.style.transform = 'translateX(100%)';
          this.menu.style.opacity = 0;
          this.resetHamburgerLine(btnLines);
          this.toggleSwitch = false;
          closedMenuBg.style.visibility = 'hidden';
        }

        lastWW = this.currentWW;
      });
    }

    hideAndShow(btnLines) {
      const closedMenuBg = document.getElementById('js-closed-menu-bg');

      if (this.toggleSwitch === false) {
        this.menu.style.transform = 'translateX(0%)';
        this.menu.style.opacity = 1;
        this.rotateHamburgerLine(btnLines);
        this.toggleSwitch = true;
        closedMenuBg.style.opacity = 1;
        closedMenuBg.style.visibility = 'visible';
      } else {
        this.menu.style.transform = 'translateX(100%)';
        this.menu.style.opacity = 0;
        this.resetHamburgerLine(btnLines);
        this.toggleSwitch = false;
        closedMenuBg.style.opacity = 0;
        closedMenuBg.style.visibility = 'hidden';
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