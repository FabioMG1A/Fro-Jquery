$(document).ready( function(){
  // $('main').hide(3000).delay(1000).show(500)

  // Muis events

  $('figure img').mouseenter( function(){
    $(this).fadeTo(600, 0.25);
  }).mouseleave( function(){
    $(this).fadeTo(1000, 1)
  }).click( function(){
    $(this).next().toggle(700);
  })

  // Footer

  $('footer').click( function(){
    $(this).animate( {
      top: '-=50px',
      opacity: '-=.2'
    }, 900)
  } ).dblclick( function(){
    $(this).animate( {
      top: '0',
      opacity: '1'
    }, 900)
  });
});

// navBar

$("nav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").click(function() {
  $("ul ul").slideUp();
  $(this).find('ul').slideToggle();
});

$(window).resize(function() {
  if($(window).width() > 768) {
        $("ul").removeAttr('style');
  }
});

