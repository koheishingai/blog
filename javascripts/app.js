$(document).ready(function($) {
  if(window.chrome && window.chrome.webstore) {
    if(window.chrome.app.isInstalled == false) {
      var $div = $('<div>').attr('id', 'install-chrome-app').html("<p>Install Our Chrome App</p>");
      $('body').prepend($div);

      $div.click(function() {
        var url = $('link[rel=chrome-webstore-item]').attr('href');

        window.chrome.webstore.install(url, function(o) {
          $('#install-chrome-app').remove();
        }, function(error) {
        });
      });
    }
  }
});

