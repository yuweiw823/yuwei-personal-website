var speed = 20;
var scrollTop = null;
var pos = null;
var moveHeight = null;
var timer = null;

function scroll_ad(){
  scrollTop = document.documentElement.scrollTop+document.body.scrollTop;
  pos = (scrollTop - moveItem.offsetTop)/10;
  moveHeight = pos>0?Math.ceil(pos):Math.floor(pos);

  if(moveHeight!=0){
  moveItem.style.top = moveItem.offsetTop+moveHeight+"px";
  timer = setTimeout(scroll_ad,30);
  }
}
