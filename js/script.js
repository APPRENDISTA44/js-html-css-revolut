$(document).ready(function() {
  $('.with-dropdown').mouseenter(
    function () {
      $(this).children('.dropdown').toggleClass('active');
    }
  )
});
