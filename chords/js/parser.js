var parser = {

  song: null,
  couplet: null,

  reset: function () {
    parser.song = song.create();
    parser.couplet = couplet.create();
  },

  parse: function (line) {
    // Check for settings
    if(settings.parse(line)) return true;

    // Check for empty lines
    if(/^\s*$/.test(line)) {
      song.addCouplet(parser.song, parser.couplet);
      parser.couplet = couplet.create();
      return true;
    }

    // Check for headers
    var match;
    if((match = /<([^>]+)>/.exec(line)) != null) {
      song.addHeader(parser.song, { type: 'header', text: match[1] });
      return true;
    }

    // By default, it is a line of lyrics
    couplet.addLine(parser.couplet, line);
    return true;
  }

};
