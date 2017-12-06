/**
 * Created by Mama on 22.09.2016.
 */
var navMain = document.querySelector('.main-nav');
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
});


ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.93866875, 30.32303304],
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
