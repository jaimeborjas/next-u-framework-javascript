// numeros aleatorios

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// cambio de color del titulo
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
// columnas


