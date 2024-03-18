$(document).ready(function() {
    $('.burger-button').on('click', function(e) {
      e.preventDefault();  
      $('.burgermenu').toggleClass('burgermenu_active');
      $('.burger-button').toggleClass('button-close');
    });
  });