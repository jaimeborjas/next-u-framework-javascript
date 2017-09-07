
// iniciar
function initGame() {

  colorBlink('h1.main-titulo');

  $('.btn-reinicio').click(function() {
    // Reloads the page when clicked for the second time
    if ($(this).text() == 'Reintentar') {
      location.reload(true);
    }
    checkBoard();
    $(this).text('Reintentar');
    // Starts the timer
    $('#timer').startTimer({
      onComplete: endGame
    })
  });
}

$(function() {
  initGame();
});

// cambio del titulo
function colorBlink(selector) {
  $(selector).animate({
    opacity: '1',
  },
  {
    step: function() {
      $(this).css('color', '#DCFF0E');
    },
    queue: true
  }
  )
  .animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'red');
    },
    queue: true
  }, 600
  )
  .delay(1000)
  .animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', '#DCFF0E');
    },
    queue: true
  }
  )
  .animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'purple')
      colorBlink('h1.main-title');
    },
    queue: true
  }
  );
}
