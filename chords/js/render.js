function render(song) {

  var pageContent = $('<div>').addClass('page-content');
  var page = $('<div>').addClass('page').append(pageContent);
  $('#content').append(page);

  for(var i = 0;i < song.elements.length;i ++) {
    var element = song.elements[i];
    var divElement;
    switch(element.type) {
      case 'header':
        divElement = $('<div>').addClass('couplet-header').text(element.text);
        break;

      case 'couplet':
        divElement = $('<div>').addClass('couplet');
        for(var j = 0;j < element.lines.length;j ++) {
          var line = element.lines[j];
          var divLine = $('<div>').addClass('line');
          for(var k = 0;k < line.length;k ++) {
            var part = line[k];
            if(typeof part === 'string')
              divLine.append($('<span>').addClass('lyrics').text(part));
            else
              divLine.append($('<span>').addClass('chord-wrapper').append($('<span>').addClass('chord').text(part.value)));
          }
          divElement.append(divLine);
        }
        break;
    }

    pageContent.append(divElement);
    if(overflown(page.get(0))) {
      divElement.detach();
      pageContent = $('<div>').addClass('page-content');
      page = $('<div>').addClass('page').append(pageContent);
      $('#content').append(page);
      pageContent.append(divElement);
    }
  }
}
