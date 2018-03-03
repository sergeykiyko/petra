   $(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("scrolled");
    $('header.nav.navbar').addClass("scrolled");
    $('.navbar-default .navbar-nav>li>a').addClass("scrolled");
    $("#logo").css("display","none");
    $("#logo-scrolled").css("display","block");
    
}
  else {
    $('header').removeClass("scrolled");
    $('header.nav.navbar').removeClass("scrolled");
    $('.navbar-default .navbar-nav>li>a').removeClass("scrolled");  
    $("#logo").css("display","block");
    $("#logo-scrolled").css("display","none");
 
  }
});