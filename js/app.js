$(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});
// アルバムデータの作成
let album = [
  { src: 'img/S__7847960_0.jpg', msg: '桃太郎'},
  { src: 'img/S__7847962_0.jpg', msg: 'これはどこだ？'},
  { src: 'img/S__7847963_0.jpg', msg: '岡山城'},
  { src: 'img/S__7847964_0.jpg', msg: '後楽園'},
  { src: 'img/S__7847965_0.jpg', msg: '美観地区'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

let mainIndex=0;

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

let timerId = setInterval(function(){
  mainIndex++;
  if ( ++mainIndex >= album.length) {
    mainIndex=0;
  }
})



