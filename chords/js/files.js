function handleFile(event) {

  // Retrieve the file
  var file = event.target.files[0];
  if(!file) return;

  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var contents = e.target.result;
    var lines = contents.split('\n');

    // Parse
    var parser = new Parser();
    for(var i = 0;i < lines.length;i ++)
      if(!(parser.parseLine(lines[i])))
        console.log("Unable to parse line " + (i + 1) + ": '" + lines[i] + "'");

    // Render
    song = parser.song;
    render(song);
  }
  fileReader.readAsText(file);

}
