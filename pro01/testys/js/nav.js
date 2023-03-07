/*const m1 = document.getElementById(".m1");
const m2 = document.getElementById(".m2");
const m3 = document.getElementById(".m3");
*/

/*메인메뉴 hover시, 서브메뉴 드롭다운으로 보여짐*/
$("nav > ul > li").mouseenter(function(){
  $(this).children(".submenu").stop().slideDown(400);
});

/*메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐*/
$("nav > ul > li").mouseleave(function(){
  $(this).children(".submenu").stop().slideUp(200);
});