import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

import './style.scss';
import { togggleMenu } from './js/_menu';
import { scrollAnimation } from './js/_scrollFadeAnimation';
import { clickedToggle } from './js/_clickedToggle';
import { loading } from './js/_loading';

loading();
togggleMenu();
scrollAnimation();
clickedToggle();