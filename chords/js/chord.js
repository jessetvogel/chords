var chord = {

  create: function (value) {
    return {
      value: value
    };
  },

  replace: function (line) {
    line = line.replace(chords.regexChord, function (full, chord) {
      return '<span class="chord-wrapper"><span class="chord-original">' + chord + '</span><span class="chord">' + chord + '</span></span>';
    });
    return line;
  }
};
