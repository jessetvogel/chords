function render(song) {

  // Clear content
  $('#content').html('');

  var pageContent = $('<div>').addClass('page-content');
  var page = $('<div>').addClass('page').append(pageContent);
  $('#content').append(page);

  // Add all couplets
  for(var i = 0;i < song.couplets.length;i ++) {
    var couplet = song.couplets[i];
    var divCouplet = $('<div>').addClass('couplet');

    // Add a header if provided
    if(couplet.header != null)
      divCouplet.append($('<pre>').addClass('couplet-header').text('[' + couplet.header + ']'));

    // Add all lines
    for(var j = 0;j < couplet.lines.length;j ++) {

      var line = couplet.lines[j];

      // Check if a line consists only of chords
      var onlyChords = true;
      for(var k = 0;k < line.length;k ++) { if(typeof line[k] === 'string' && !(/^\s*$/g.test(line[k]))) { onlyChords = false; break; } }

      if(onlyChords) {
        var preChords = $('<pre>').addClass('chords').append(line[0].toString());
        for(var k = 1;k < line.length;k ++) {
            preChords.append('   ' + line[k].toString());
        }
        divCouplet.append(preChords);
        continue;
      }

      // Otherwise, ...
      var preChords = $('<pre>').addClass('chords');
      var preLyrics = $('<pre>').addClass('lyrics');

      var position = 0;
      for(var k = 0;k < line.length;k ++) {
        var part = line[k];
        if(typeof part === 'string') {
          preLyrics.append(part);
          position += part.length;
        }
        else {
          preChords.append(new Array(position + 1).join(' '));
          var chord = part.toString();
          preChords.append(chord);
          position = - chord.length;
        }
      }
      divCouplet.append(preChords);
      divCouplet.append(preLyrics);
    }

    pageContent.append(divCouplet);
    if(overflown(page.get(0))) {
      divCouplet.detach();
      pageContent = $('<div>').addClass('page-content');
      page = $('<div>').addClass('page').append(pageContent);
      $('#content').append(page);
      pageContent.append(divCouplet);
    }
  }

  update();
}

function update() {
  $('pre.chords').css( { color: chordColor } );
}
