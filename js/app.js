$(document).ready(function() {
  $('.btn, .btn-backspace, btn-clear').on('click', function() {
    var $this = $(this);
    var $thisValue = $(this).text();
    if ($this.hasClass('btn-backspace')) {
      var $num = $('.current').text();
      var slice = $num.slice(0, -1);
      $('.current').text(slice);
    } else if ($this.hasClass('btn-clear')) {
      $('.current').text('');
      console.log('hola');
    } else {
      $('.current').append($thisValue);
    }
  });
});

var calc = (function() {
    // Private variables and functions



    // Public API
    // return {
    // };
})();
