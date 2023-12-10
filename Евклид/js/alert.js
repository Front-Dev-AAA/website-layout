// alert ("I javaScript");


// слайдер


// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';



var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true



  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// табы

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__btn').forEach(function (e) {
        e.classList.remove('work__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
      });
    });

  });
})


//аккордеон


$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: 'content',
  });
});


// бургер


const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});


// открытие и закрытие поля поиска

const searchBtn = document.querySelector('.search');
const searchClose = document.querySelector('.search_close');
// const searchField = document.querySelector('.search_field');
const searchForm = document.querySelector('.search_form');
const searchfirstBtn = document.querySelector('.search.first');


// открытие

// searchBtn.addEventListener('click', () => {
//   searchField.classList.add('search-active');

// });

// searchBtn.addEventListener('click', () => {
//   searchClose.classList.add('search-active');

// });

searchBtn.addEventListener('click', () => {
  searchForm.classList.add('form-active');
});

searchBtn.addEventListener('click', () => {
  searchfirstBtn.classList.add('search-first');
});

// закрытие

// searchClose.addEventListener('click', () => {
//   searchField.classList.remove('search-active');
// });

// searchClose.addEventListener('click', () => {
//   searchClose.classList.remove('search-active');
// });

searchClose.addEventListener('click', () => {
  searchForm.classList.remove('form-active');
});

searchClose.addEventListener('click', () => {
  searchfirstBtn.classList.remove('search-first');
});

