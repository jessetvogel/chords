function Couplet() {

  // Properties
  this.type = 'couplet';
  this.header = null;
  this.lines = [];

  // Methods
  this.empty = function () {
    return this.lines.length == 0;
  }

  this.setHeader = function(header) {
    this.header = header;
  }

  this.addLine = function (line) {
    var parts = [];
    var remainder = line;

    var match;
    while((match = /^(.*?)\[([^\]]+)\](.*)$/g.exec(remainder)) != null) {
      parts.push(match[1]);
      parts.push(new Chord(match[2]));
      remainder = match[3];
    }
    if(remainder != '') parts.push(remainder);
    this.lines.push(parts);
  };
  
};
