$(document).ready(function() {
    $('.burger-button').on('click', function(e) {
      e.preventDefault();  
      $('.burgermenu').toggleClass('burgermenu_active');
      $('.burger-button').toggleClass('button-close');
    });
  });
  
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4, 
    spaceBetween: 15, 
    slidesPerGroup: 3, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1, 
        spaceBetween: 10, 
        slidesPerGroup: 3, 
      },
      769: {
        slidesPerView: 2, 
        spaceBetween: 10, 
        slidesPerGroup: 3, 
      },
      1024: { 
        slidesPerView: 4, 
        spaceBetween: 15  
      }
    },
  });