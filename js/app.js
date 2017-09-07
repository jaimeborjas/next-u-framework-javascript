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
// columnas y filas

function giveCandyArrays(arrayType, index) {

  var candyCol1 = $('.col-1').children();
  var candyCol2 = $('.col-2').children();
  var candyCol3 = $('.col-3').children();
  var candyCol4 = $('.col-4').children();
  var candyCol5 = $('.col-5').children();
  var candyCol6 = $('.col-6').children();
  var candyCol7 = $('.col-7').children();

  var candyColumns = $([candyCol1, candyCol2, candyCol3, candyCol4,
                       candyCol5, candyCol6, candyCol7]);

  if (typeof index === 'number') {
    var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index),
                      candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),
                      candyCol7.eq(index)]);
  } else {
    index = '';
  }

  if (arrayType === 'columns') {
    return candyColumns;
  } else if (arrayType === 'rows' && index !== '') {
    return candyRow;
  }
}

// crear filas y columnas

function candyRows(index) {
  var candyRow = giveCandyArrays('rows', index);
  return candyRow;
}

function candyColumns(index) {
  var candyColumn = giveCandyArrays('columns');
  return candyColumn[index];
}


//validar donde se debe eliminar un dulce
    var counter = 0;
    // guardar la posicion del dulce
    var candyPosition = [];
    // guardar la posicion de un dulcce extra
    var extraCandyPosition = [];
    // Crear a candyColumn
    var candyColumn = candyColumns(j);
    // coger el primer dulce
    var comparisonValue = candyColumn.eq(0);
    // por si hay un espacio
    var gap = false;

    for (var i = 1; i < candyColumn.length; i++) {

      var srcComparison = comparisonValue.attr('src');

      var srcCandy = candyColumn.eq(i).attr('src');

      if (srcComparison != srcCandy) {
        if (candyPosition.length >= 3) {
          gap = true;
        } else {
          candyPosition = [];
        }
        counter = 0;
      } else {
        if (counter == 0) {
          if (!gap) {
            candyPosition.push(i-1);
          } else {
            extraCandyPosition.push(i-1);
          }
        }
        if (!gap) {
          candyPosition.push(i);
        } else {
          extraCandyPosition.push(i);
        }
        counter += 1;
      }

      comparisonValue = candyColumn.eq(i);
    }

    if (extraCandyPosition.length > 2) {
      candyPosition = $.merge(candyPosition, extraCandyPosition);
    }

      candyPosition = [];
    }
    candyCount = candyPosition.length;
    if (candyCount >= 3) {
      deleteColumnCandy(candyPosition, candyColumn);
      setScore(candyCount);
    }
  }
}

