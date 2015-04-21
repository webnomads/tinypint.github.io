$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });

  $(".main .type").typed({
    strings: ["Help Small Businesses", "Support Non-Profits", "Augment Existing Agencies", "Are Here To Help You"],
    //strings: ["Make","Market","Maintain"],
    typeSpeed: 100,
    contentType: 'html', // or 'text'
    startDelay: 500,
    backDelay: 2000,
    showCursor: true,
  });

});