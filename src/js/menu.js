import jQuery from "jquery";
// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

export const helloWorld = function() {
  console.log($('.js-fv'));
}