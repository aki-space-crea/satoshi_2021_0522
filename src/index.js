import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

import { helloWorld } from './js/menu';

const $fv = $('.js-fv');

$fv.addClass('is-active');

helloWorld();