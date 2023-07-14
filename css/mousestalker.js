var
cursor = document.getElementById("cursor"),
follower = document.getElementById("follower"),
link = document.getElementsByClassName("link"),


pos = { x: 0, y: 0 }, // カーソル要素の座標
mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
speed = 0.5; // 0.01〜1 数値が大きほど早い

// カーソルの座標を設定する
var cursorSetX = gsap.quickSetter(cursor, "x", "px");
var cursorSetY = gsap.quickSetter(cursor, "y", "px");

// 遅延するカーソルの座標を設定する
var followerSetX = gsap.quickSetter(follower, "x", "px");
var followerSetY = gsap.quickSetter(follower, "y", "px");

// マウスカーソル座標を取得する
document.addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


gsap.ticker.add(function() {
  
  var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  cursorSetX(pos.x);
  cursorSetY(pos.y);
  followerSetX(pos.x);
  followerSetY(pos.y);
});

// マウスイベント
for(var i = 0; i < link.length; i++) {

  link[i].addEventListener("mouseenter", function() {
    follower.classList.add("is-active");
  });

  link[i].addEventListener("mouseleave", function() {
    follower.classList.remove("is-active");
  });

}