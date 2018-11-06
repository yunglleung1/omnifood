$(document).ready(function() {
  /*Sticky Navigation*/
  $('.js--section-features').waypoint(function(direction){
    if (direction === 'down') {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
    offset: '60px;'
  })

  /*Scroll to Plans or Features on button click*/
  $('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  })

  $('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  })

  /*Nav Bar Link to Section for Smooth Scroll Effect*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /*Animations on Scroll*/
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp')
  }, {
    offset: '50%'
  })

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse')
  }, {
    offset: '50%'
  })


  /*MobileNav*/
  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav')
    var icon = $('.js--nav-icon ion-icon')

    if(icon.hasClass('ion-navicon-round')) {
      icon.removeClass('ion-navicon-round')
      icon.attr('name', 'close')
    } else {
      icon.addClass('ion-navicon-round')
      icon.attr('name', 'menu')
    }
    nav.slideToggle(200)
  })
});
