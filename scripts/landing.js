var animatePoints = function() {

  var revealPoint = function(){

    // Fade in and up
    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });

  };

  // Loop through each point and fadin/up
  $.each( $('.point'), revealPoint );

};

$(window).load(function() {

  // If the selling points are already in the viewport, display them
  if( $(window).height() > 950 ){
    animatePoints();
  }

  // Get the distance from the selling points section to the top of the window and
  // subtract the total window height.
  // Then add 200px so we can start the animation just before the points section begins.
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
  console.log(scrollDistance);
  console.log( $(window).scrollTop() );

  $(window).scroll(function(event) {

    // If the current vertical position of the scroll bar is greater than
    // the points scroll distance, that means they're in view so display them
    if( $(window).scrollTop() >= scrollDistance ) {
      animatePoints();
    }

  });

});