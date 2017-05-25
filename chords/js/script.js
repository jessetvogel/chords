// Global variables
var song = null;
var transpose = 0;

$(document).ready(function () {
  // Event listeners
  $('#file-input').on('change', handleFile);
  $('#transpose-up').click(function () { transpose += 1; if(song != null) render(song); });
  $('#transpose-down').click(function () { transpose -= 1; if(song != null) render(song); });
});
