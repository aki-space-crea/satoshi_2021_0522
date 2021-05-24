













import jQuery from "jquery";
import './style.scss';
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

import { helloWorld } from './js/menu';

const $fv = $('.js-fv');

$fv.addClass('is-active');

helloWorld();

console.log('B');