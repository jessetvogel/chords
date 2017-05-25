function Chord(str) {

  // Properties
  var info = getChordInfo(str);
  this.root = info.root;
  this.additional = info.additional;
  this.bass = info.bass;

  // Methods
  this.toString = function () {
    var chord = transposeNote(this.root);
    if(this.additional != null) chord += this.additional;
    if(this.bass != null) chord += '/' + transposeNote(this.bass);
    return chord;
  }
};

function getChordInfo(str) {
  var info = {
    root: null,
    additional: null,
    bass: null
  };

  var regex = /^([A-G](?:\#|b)?)(m|7|m7|min|maj|dim|aug|min7|maj7|dim7|aug7|sus|sus2|sus4|add2|add9)?(?:\/([A-G](?:\#|b)?))?$/;
  var match = regex.exec(str);
  if(match == null) return null;

  info.root = match[1];
  info.additional = match[2];
  info.bass = match[3];
  return info;
}

function transposeOne(str) {
  switch(str) {
    case 'C': return 'C#';
    case 'C#': return 'D';
    case 'Cb': return 'C';
    case 'Db': return 'D';
    case 'D': return 'D#';
    case 'D#': return 'E';
    case 'Db': return 'D';
    case 'E': return 'F';
    case 'E#': return 'F#';
    case 'Eb': return 'E';
    case 'F': return 'F#';
    case 'F#': return 'G';
    case 'Fb': return 'F';
    case 'G': return 'G#';
    case 'Gb': return 'G';
    case 'G#': return 'A';
    case 'A': return 'A#';
    case 'Ab': return 'A';
    case 'A#': return 'B';
    case 'B': return 'C';
    case 'B#': return 'C#';
    case 'Bb': return 'B';
  }
}

function transposeNote(str) {
  var n = (transpose + 12) % 12;
  for(var i = 0;i < n;i ++)
    str = transposeOne(str);
  return str;
}
