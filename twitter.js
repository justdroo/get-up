// ============================
// Register the Service Worker
// ============================

navigator.serviceWorker.register('./sw.js');

// ============================
// Instant Gratification/ Testing
// ============================

var button = document.getElementById('test-notification');

button.addEventListener('click', function() {

  Notification.requestPermission( () => {

    navigator.serviceWorker.ready
    .then( (registration) => {

      // function httpGet(theUrl) {
      //   var xmlHttp = new XMLHttpRequest();
      //   xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      //   xmlHttp.send( null );
      //   return xmlHttp.responseText;
      // }
      //
      // var newBody = httpGet('http://localhost:4567/')

      var options = {
        body: 'shake yo hands, stretch those thighs, take a walk, get some water, take a break',
        icon: 'media/grow.png',
        badge: 'media/grow.png',
        silent: true
      };

      registration.active.postMessage({
        title: 'Move dat body',
        options: options
      });
    })
  })
});

// ============================
// 45 minute interval pushes
// ============================

window.setInterval( () => {
// button.addEventListener('click', function() {

  Notification.requestPermission( () => {

    navigator.serviceWorker.ready
    .then( (registration) => {

      function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
      }

      var newBody = httpGet('http://localhost:4567/')

      var options = {
        body: "",
        icon: 'https://www.gdnmobilelab.com/workshop/icon.png',
        badge: 'https://www.gdnmobilelab.com/workshop/badge.png',
        silent: true
      };

      registration.active.postMessage({
        title: newBody,
        options: options
      });
    })
  })
}, 27000000);
