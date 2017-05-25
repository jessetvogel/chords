function Song() {
  // Properties
  this.couplets = [];

  // Methods
  this.addCouplet = function (couplet) {
    this.couplets.push(couplet);
  };
};
