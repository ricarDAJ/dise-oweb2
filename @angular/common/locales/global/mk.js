/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY.
  (function(global) {
    global.ng ??= {};
    global.ng.common ??= {};
    global.ng.common.locales ??= {};
    const u = undefined;
    function plural(val) {
const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;

if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
    return 1;
return 5;
}
    global.ng.common.locales['mk'] = ["mk",[["претпл.","попл."],u,["претпладне","попладне"]],u,[["н","п","в","с","ч","п","с"],["нед.","пон.","вто.","сре.","чет.","пет.","саб."],["недела","понеделник","вторник","среда","четврток","петок","сабота"],["нед.","пон.","вто.","сре.","чет.","пет.","саб."]],u,[["ј","ф","м","а","м","ј","ј","а","с","о","н","д"],["јан.","фев.","мар.","апр.","мај","јун.","јул.","авг.","септ.","окт.","ноем.","дек."],["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]],u,[["п.н.е.","н.е."],u,["пред нашата ера","од нашата ера"]],1,[6,0],["d.M.yy","d.M.y","d MMMM y","EEEE, d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, 'во' {0}",u,u,u],[",",".",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0 %","#,##0.00 ¤","#E0"],"MKD","ден.","Македонски денар",{"AUD":[u,"$"],"BYN":[u,"р."],"CNY":[u,"¥"],"GBP":[u,"£"],"HKD":[u,"$"],"ILS":[u,"₪"],"INR":[u,"₹"],"JPY":[u,"¥"],"KRW":[u,"₩"],"MKD":["ден."],"NZD":[u,"$"],"PHP":[u,"₱"],"TWD":[u,"NT$"],"USD":["US$","$"],"VND":[u,"₫"]},"ltr", plural, [[["полн.","напл.","утро","претпл.","попл.","веч.","ноќе"],["полноќ","напладне","наутро","претпладне","попладне","навечер","ноќе"],["полноќ","напладне","наутро","претпладне","попладне","навечер","по полноќ"]],[["полноќ","пладне","наутро","претпл.","попл.","навечер","по полноќ"],["полноќ","напладне","наутро","претпл.","попл.","навечер","по полноќ"],["на полноќ","напладне","наутро","претпладне","попладне","навечер","по полноќ"]],["00:00","12:00",["04:00","10:00"],["10:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]]];
  })(globalThis);
    