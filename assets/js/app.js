'use strict';
// Ui variables
const menuItem = document.querySelectorAll('.header-menu li');
const dropdownMenu = document.querySelector('.header-dropdown');
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.header-searchbox');
const navMenuBtn = document.querySelector('.header-menuBtn');
const navMenu = document.querySelector('.mobile-menu');
const navMenuItem = document.querySelectorAll('.menu li ');
// Add Active Drop menu
menuItem.forEach((item) => {
  item.addEventListener('click', function () {
    dropdownMenu.classList.toggle('d-block');
    removeActive();
    item.classList.toggle('active');
  });
});

function removeActive() {
  menuItem.forEach((item) => item.classList.remove('active'));
}
// Search Field toggle
searchBtn.addEventListener('click', function () {
  searchBtn.classList.toggle('active');
  searchBox.classList.toggle('d-block');
});

// Nav Menu
navMenuBtn.addEventListener('click', function () {
  navMenuBtn.classList.toggle('active');
  navMenu.classList.toggle('d-block');
  navMenu.classList.toggle('active');
});

// Fixed Header
// $(window).scroll(function () {
//   var sticky = $('.header'),
//     scroll = $(window).scrollTop();
//   if (scroll >= 100) sticky.addClass('header--fixed');
//   else sticky.removeClass('header--fixed');
// });

// navigation menu list
navMenuItem.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});
