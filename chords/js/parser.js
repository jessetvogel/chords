function Parser() {
  // Properties
  this.song = new Song();
  this.currentCouplet = null;

  // Methods
  this.parseLine = function(line) {
    // Check for empty lines
    if(/^\s*$/.test(line)) {
      // This indicates the end of the couplet, so set current couplet to null, so that a new one will be created if necessary
      this.currentCouplet = null;
      return true;
    }

    // Check for headers
    var match;
    if((match = /{([^>]+)}/.exec(line)) != null) {
      // Start a new couplet, with the given header
      this.currentCouplet = new Couplet();
      this.song.addCouplet(this.currentCouplet);
      this.currentCouplet.setHeader(match[1]);
      return true;
    }

    // If none of the above, it is a line of lyrics. Create a new couplet if necessary
    if(this.currentCouplet == null) {
      this.currentCouplet = new Couplet();
      this.song.addCouplet(this.currentCouplet);
    }
    this.currentCouplet.addLine(line);
    return true;
  }
}
