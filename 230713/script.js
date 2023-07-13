$('.navbar-menu').hover(function(){
  $(this).find('.menu-list').stop().slideDown(300)
  $(this).children('a').addClass('active')
}, function(){
  $(this).find('.menu-list').stop().slideUp(300)
  $(this).children('a').removeClass('active')
})