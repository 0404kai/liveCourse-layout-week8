"use strict";

$('#burger').on('click', function () {
  $('#burger').toggleClass('open');
  $('#menu').slideToggle();
});
$('#filterOpen').on('click', function () {
  $('#filterList').fadeToggle();
  $('#filterModal').fadeToggle();
});
$('#filterClose').on('click', function () {
  $('#filterList').fadeToggle();
  $('#filterModal').fadeToggle();
});
var mySwiper = new Swiper('.swiper.PC', {
  autoplay: {
    disableOnInteraction: false
  },
  loop: true,
  slidesPerView: 3,
  effect: 'coverflow',
  // effect 不支援不同斷點改變屬性，改用兩個 swiper 來做
  coverflowEffect: {
    scale: .9,
    rotate: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false
  },
  pagination: {
    el: '.swiper-pagination.PC',
    clickable: true
  }
});
new Swiper('.swiper.mobile', {
  autoplay: {
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination.mobile',
    clickable: true
  }
});
var introduceSwaiper = new Swiper('.swiper-introduce', {
  autoplay: {
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  }
});
var msnry = new Masonry('.grid-fail', {
  columnWidth: '.grid-item',
  gutter: 24,
  itemSelector: '.grid-item',
  percentPosition: true
});
var rankingCollapse = document.querySelector('#collapse');
rankingCollapse.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'A') return;
  var list = e.target.parentNode.parentNode.lastElementChild;
  e.target.classList.toggle('fa-plus');
  e.target.classList.toggle('fa-minus');
  e.target.classList.toggle('after:border-b-black');
  e.target.classList.toggle('after:border-b-orange');
  list.classList.toggle('max-h-0');
  list.classList.toggle('max-h-96');
  list.classList.toggle('border');
});
//# sourceMappingURL=all.js.map
