var settings = {
  // Options
  chordColor: '#6bc8fc',

  // Patterns
  regexChordColor: /\s*{\s*chord-color\s*:\s*(\#[A-Fa-f0-9]{6})\s*}\s*/g,

  parse: function (line) {
    var match;
    
    if((match = settings.regexChordColor.exec(line)) != null) { settings.chordColor = match[1]; return true; }
  },


  update: function () {

  }
};
