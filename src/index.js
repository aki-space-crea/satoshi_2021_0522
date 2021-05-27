import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

import './style.scss';
import { togggleMenu } from './js/_menu';
import { scrollAnimation } from './js/_scrollFadeAnimation';
import { clickedToggle } from './js/_clickedToggle';
import { loading } from './js/_loading';
// import '.js/_swiper.js';

loading();
togggleMenu();
scrollAnimation();
clickedToggle();

// コアバージョンに加えて、ナビゲーションとページネーションを追加する
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// モジュールを使用可能に
SwiperCore.use([Navigation, Pagination]);

const swiper = new SwiperCore('.swiper-container', {
  // Optional parameters
  // 方向
  direction: 'horizontal',
  // ループ
  loop: true,
  // 切り替え時のアニメーション
  effect: 'fade',
  // 表示位置
  centeredSlides: true,
  // 余白
  spaceBetween: 10,

  // レスポンシブ
  breakpoints: {
    // 画面幅が769px以上の設定
    1024: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  // ページャー
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // 進む、戻るボタン
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});