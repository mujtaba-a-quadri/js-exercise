$( "tr > th" ).css( "border", "3px double red" );
$(".image").click(fadeOutAndIn);
$(":button").fadeOut();

function fadeOutAndIn(){
  $( ".image" ).fadeOut();
  $( ":button" ).fadeIn();
}
function backIn(){
  $( ".image" ).fadeIn();
  $( ":button" ).fadeOut();
}

