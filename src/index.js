import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

import './style.scss';
import { togggleMenu } from './js/menu';
import { scrollAnimation } from './js/_scrollFadeAnimation';

togggleMenu();
scrollAnimation();