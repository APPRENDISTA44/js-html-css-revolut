$(document).ready(function() {
  //tendina compare andando sopra col mouse
  $('.with-dropdown').mouseenter(
    function () {
      $(this).children('.dropdown').addClass('active');
    }
  )
  //scompare con un click
  $('.with-dropdown').click(
    function () {
      $(this).children('.dropdown').removeClass('active');
    }
  )
  //cambia l'icona con la freccia quando ci vado sopra col mouse
  $('.it').mouseenter(
    function () {
      $(this).children('i').toggleClass('active');
    }
  )
  $('.it').mouseleave(
    function () {
      $(this).children('i').toggleClass('active');
    }
  )
});
