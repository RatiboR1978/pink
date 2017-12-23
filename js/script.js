$(document).ready(function(){

  /*Button - Up
   ========================*/

  $(window).scroll(function() {

    if($(this).scrollTop() === 0) {
      $('.bt-up').fadeOut();
    } else {
      $('.bt-up').fadeIn();
    }
  });

  $('.bt-up').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

  /* Фиксация меню
   =========================*/
  var headerH;
  if (window.location.pathname === '/index.html') {
    headerH = $('.download').height();
  } else if (window.location.pathname === '/photo.html') {
    headerH = $('.user-photos__bg-header').height();
  } else {
    headerH = $('.user-form__bg').height();
  }

    var navH = $('.main-nav').innerHeight();
  $(document).on('scroll', function () {
    //alert(window.location.pathname);
    var documentScroll = $(this).scrollTop();
    if (documentScroll > headerH) {
      $('.main-nav').addClass('page-header__wrap-fixed');
      $('.download').css('paddingTop', navH);
    } else {
      $('.main-nav').removeClass('page-header__wrap-fixed');
      $('.download').removeAttr('style');
    }
  });

  var width = $(window).width(),
      menu = $('.main-nav__user-items');
    $(function() {
      var pull = $('.main-nav__toggle'),
        menuHeight = menu.height();
      $(pull).on('click', function(e) {
        menu.slideToggle();
      });
    });


  /* Гамбургер
   =========================*/
  $(".menu_btn").click(function() {
    $(".menu_btn").toggleClass("menu_btn_active");
  });



});

var imgEditor = document.querySelector('#img'),
   saturation = document.querySelector('#saturation');
    contrast = document.querySelector('#contrast');
contrast.addEventListener('change', function () {
  imgEditor.style.filter = `grayscale(${Math.abs(this.value - 100)}%)`;
});

saturation.addEventListener('change', function () {
  imgEditor.style.filter = `saturate(${Math.abs(this.value - 200)}%)`;
});


var reviewsItem = document.querySelectorAll('.reviews__item'),
    next = document.querySelector('.reviews__control-right'),
    i = 0,
    prev = document.querySelector('.reviews__control-left');

next.addEventListener('click', function (e) {
  e.preventDefault();
  i++;
  Array.from(reviewsItem).forEach(function (item) {
    item.classList.remove('reviews__item--active');
  });
  if (i === reviewsItem.length) {
    i = 0;
  }

  reviewsItem[i].classList.add('reviews__item--active');
});

prev.addEventListener('click', function (e) {
  e.preventDefault();
  i--;
  Array.from(reviewsItem).forEach(function (item) {
    item.classList.remove('reviews__item--active');
  });
  if (i < 0) {
    i = reviewsItem.length - 1;
  }

  reviewsItem[i].classList.add('reviews__item--active');
});



/**
 * Created by Mama on 22.09.2016.
 */
/*var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});*/

ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.93896875, 30.32303304],
    zoom: 17
  });

  myPlacemark = new ymaps.Placemark([59.93866875, 30.32303304], {
    hintContent: 'Pink',
    balloonContent: 'Приложение №1'
  },
  {
    preset: 'islands#redIcon'
  });


  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('searchControl');

  myMap.geoObjects.add(myPlacemark);
}
