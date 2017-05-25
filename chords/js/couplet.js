var couplet = {

  create: function () {
    return {
      type: 'couplet',
      lines: []
    };
  },

  empty: function (c) { return c.lines.length == 0; },

  addLine: function (c, l) {;
    var line = [];
    var remainder = l;

    var match;
    while((match = /^(.*?)\[([^\]]+)\](.*)$/g.exec(remainder)) != null) {
      line.push(match[1]);
      line.push(chord.create(match[2]));
      remainder = match[3];
    }
    if(remainder != '') line.push(remainder);

    c.lines.push(line);
  }

};
