// Global variables
var song = null;
var transpose = 0;
var chordColor = '#6bc8fc';

$(document).ready(function () {
  // Event listeners
  $('#file-input').on('change', handleFile);
  $('#transpose-up').click(function () { transpose += 1; if(song != null) render(song); });
  $('#transpose-down').click(function () { transpose -= 1; if(song != null) render(song); });
  $('#color-input').on('change', function () {
    chordColor = $(this).val();
    $('#chord-color span.glyphicon').css({ color: chordColor });
    update();
  });

  // Initialize other things
  $('#chord-color span.glyphicon').css({ color: chordColor });
});
