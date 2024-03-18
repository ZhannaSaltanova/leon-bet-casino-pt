$(document).ready(function() {
    $('.burger-button').on('click', function(e) {
      e.preventDefault();  
      $('.burgermenu').toggleClass('burgermenu_active');
      $('.burger-button').toggleClass('button-close');
    });
  });
  

  // const swiper = new Swiper('.swiper', {
  //   slidesPerView: 3, 
  //   spaceBetween: 20, 
  //   slidesPerGroup: 1, 
  //   watchOverflow: true,
  //   loopFillGroupWithBlank: false,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     1: {
  //       slidesPerView: 1, 
  //       spaceBetween: 10, 
  //       slidesPerGroup: 1, 
  //     },
  //     768: {
  //       slidesPerView: 2, 
  //       spaceBetween: 10, 
  //       slidesPerGroup: 1, 
  //     },
  //     1024: { 
  //       slidesPerView: 2, 
  //       spaceBetween: 20,
  //       slidesPerGroup: 1,   
  //     }
  //   },
  // });
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
      },
      769: {
        slidesPerView: 2, 
        spaceBetween: 10, 
      },
      1024: { 
        slidesPerView: 4, 
        spaceBetween: 15  
      }
    },
  });