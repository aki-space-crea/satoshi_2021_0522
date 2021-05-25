import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const scrollAnimation = () => {
  let tl = gsap.timeline();
  tl.from('.js-fade', {
    y: "+=100",
    stagger: {
      trigger: '.list',
      each: 0.2, //0.3秒おきにアニメーション
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true
    }
  });
}