var files = {

  read : function (event) {
    // Retrieve the file
    var file = event.target.files[0];
    if(!file) return;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
      var contents = e.target.result;
      var lines = contents.split('\n');

      // Parse
      parser.reset();
      for(var i = 0;i < lines.length;i ++)
        if(!(parser.parse(lines[i])))
          console.log("Unable to parse line " + (i + 1) + ": '" + lines[i] + "'");

      // Render
      $('#content').html('');
      render(parser.song);
    }
    fileReader.readAsText(file);
  }

}
