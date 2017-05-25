var song = {

  create: function () {
    return {
      elements: []
    };
  },

  addCouplet: function (s, c) {
    if(couplet.empty(c)) return;
    s.elements.push(c);
  },

  addHeader: function (s, h) {
    s.elements.push(h);
  }

};
