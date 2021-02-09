$(function() {

  $("#collapsable-nav").blur(function (event) {
    var screenWidth = window.innerWidth;
    if(screenWidth < 768) {
      $("#coursify-menu").collapse('hide');
    }
  });

  $("#collapsable-nav").click(function (event) {
    $(event.target).focus();
  });

});
