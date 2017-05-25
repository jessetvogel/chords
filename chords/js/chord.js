function Chord(str) {

  // Properties
  this.str = str;
  this.info = getChordInfo(str);

  // Methods
  this.toString = function () {
    if(this.info == null) return '?';
    var chord = transposeNote(this.info.root);
    if(this.info.additional != null) chord += this.info.additional;
    if(this.info.bass != null) chord += '/' + transposeNote(this.info.bass);
    return chord;
  }
};

function getChordInfo(str) {
  var info = {
    root: null,
    additional: null,
    bass: null
  };

  var regex = /^([A-G](?:\#|b)?)((?:m|min|maj|dim|aug|sus|add)?(?:2|3|4|5|6|7|8|9|10|11|12|13)?)(?:\/([A-G](?:\#|b)?))?$/;
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
