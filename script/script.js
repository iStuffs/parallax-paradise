$(window).scroll(function(){
  var vScroll = $(this).scrollTop();
  $('.hero-title').css({
    'transform' : 'translateY( ' + vScroll /12  + '%)'
  });
});
