self.addEventListener( 'install', () ->
    return self.skipWaiting()
    )

self.addEventListener( 'activate', () ->
    return self.clients.claim()
    )


self.addEventListener( 'message', (event) ->
  #event.data is a simple object
  title = event.data.title
  options = event.data.options
  self.registration.showNotification(
    title,
    options
  )
)

self.addEventListener('notificationclick', (e) ->
  notification = e.notification;

  console.log("Clicked on", notification.title)

  notification.close()
)
