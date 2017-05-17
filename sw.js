self.addEventListener('install', () => {
    return self.skipWaiting();
});

self.addEventListener('activate', () => {
    return self.clients.claim();
});

self.addEventListener('message', (event) => {
  // event.data is a simple object
  var title = event.data.title;
  var options = event.data.options;

  self.registration.showNotification(
    title,
    options
  );
});

self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;

    console.log("Clicked on", notification.title);

    notification.close();
})
